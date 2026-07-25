const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

// CocoaPods' Pod::Project (a Xcodeproj::Project subclass) overrides
// generate_available_uuid_list with a purely deterministic, index-based
// formula (prefix + hex(@generated_uuids.size)) and — unlike the base class —
// never checks the result against UUIDs already used elsewhere in the
// project. Its doc comment assumes "the Pods project is regenerated each
// time, and thus all UUIDs will have come from this method", i.e. that
// @generated_uuids.size always reflects every object in the project.
//
// That assumption breaks when a *new* Pod::Project instance for the same
// path is created after the original one already populated the project
// (observed here during react-native's spm.rb post_install hook, which adds
// Clerk's ClerkKit/ClerkKitUI Swift Package product dependencies): the fresh
// instance's @generated_uuids restarts at 0, so its first allocated UUID
// collides with whatever object claimed that same index in the earlier
// instance — in practice, the root PBXProject object itself. The collision
// silently overwrites the root object when the project is serialized,
// corrupting Pods.xcodeproj so Xcode can't resolve the cross-project build
// dependency graph at all ("no such module 'Expo'", every pod's modulemap
// reported missing, "Target dependency graph (1 target)").
//
// Fix: patch generate_available_uuid_list to also exclude UUIDs already
// present in the project (`uuids`), matching the base class's safe
// behavior, and keep advancing the index until enough truly-unique UUIDs
// are found.
const UUID_FIX = `
# Patched: fix a UUID collision in CocoaPods' Pod::Project#generate_available_uuid_list.
# See plugins/withPodsUuidCollisionFix.js for the full explanation.
require 'cocoapods'
module ::Pod
  class Project
    def generate_available_uuid_list(count = 100)
      start = @generated_uuids.size
      candidates = Array.new(count) { |i| format('%.6s%07X0', @uuid_prefix, start + i) }
      uniques = candidates - uuids
      while uniques.size < count
        start += count
        more = Array.new(count) { |i| format('%.6s%07X0', @uuid_prefix, start + i) }
        uniques += (more - uuids - uniques)
      end
      uniques = uniques.first(count)
      @generated_uuids += uniques
      @available_uuids += uniques
    end
  end
end
`;

const withPodsUuidCollisionFix = config => {
  return withDangerousMod(config, [
    'ios',
    async config => {
      const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      let podfile = fs.readFileSync(podfilePath, 'utf8');

      if (!podfile.includes("Pod::Project#generate_available_uuid_list")) {
        podfile = podfile.replace(
          /(prepare_react_native_project!)/,
          `${UUID_FIX}\n$1`,
        );
        fs.writeFileSync(podfilePath, podfile);
      }

      return config;
    },
  ]);
};

module.exports = withPodsUuidCollisionFix;
