import { AboutMeCard } from "@/components/profile/AboutMeCard";
import { PreferencesCard } from "@/components/profile/PreferencesCard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { SafetyVerificationCard } from "@/components/profile/SafetyVerificationCard";
import { dummyUserProfile } from "@/features/profile/data";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#F1F5F9]">
      <ProfileHeader profile={dummyUserProfile} />

      <ScrollView
        style={{ marginTop: -28 }}
        contentContainerClassName="gap-4 px-5"
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        <AboutMeCard aboutMe={dummyUserProfile.aboutMe} />
        <SafetyVerificationCard />
        <PreferencesCard preferences={dummyUserProfile.preferences} />
      </ScrollView>
    </View>
  );
}
