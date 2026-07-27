import type { UserProfile } from "@/features/profile/types";
import { LinearGradient } from "expo-linear-gradient";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ProfileHeaderProps = {
  profile: UserProfile;
  onEditPress?: () => void;
};

export function ProfileHeader({ profile, onEditPress }: ProfileHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={["#3B82F6", "#60A5FA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ paddingTop: insets.top + 12 }}
    >
      <View className="px-5 pb-16">
        <View className="flex-row items-start justify-between">
          <View className="flex-1 flex-row items-center gap-4">
            <View className="relative">
              <Image
                source={{ uri: profile.avatarUrl }}
                className="h-[92px] w-[92px] rounded-full bg-white/30"
              />
              <View className="absolute bottom-0.5 right-0.5 h-6 w-6 rounded-full border-[3px] border-white bg-[#22C55E]" />
            </View>

            <View className="flex-1 pt-1">
              <Text className="text-[24px] font-bold text-white">
                {profile.name}
              </Text>

              {profile.isVerifiedStudent && (
                <View className="mt-1.5 flex-row items-center gap-1.5">
                  <View className="h-5 w-5 items-center justify-center rounded-full bg-[#22C55E]">
                    <SymbolView
                      name="checkmark"
                      tintColor="white"
                      size={9}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[15px] font-semibold text-white">
                    Verified Student
                  </Text>
                </View>
              )}

              <Text className="mt-1.5 text-[14px] leading-[19px] text-white/90">
                {profile.school}
              </Text>
              <Text className="text-[14px] leading-[19px] text-white/90">
                {profile.program}
              </Text>
            </View>
          </View>

          <Pressable
            onPress={onEditPress}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-white/75"
          >
            <SymbolView
              name="pencil"
              tintColor="grey"
              size={19}
              weight="semibold"
            />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
