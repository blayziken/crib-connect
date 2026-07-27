import { AboutMeCard } from "@/components/profile/AboutMeCard";
import { PreferencesCard } from "@/components/profile/PreferencesCard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { SafetyVerificationCard } from "@/components/profile/SafetyVerificationCard";
import { dummyUserProfile } from "@/features/profile/data";
import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return <ProfileScreenContent />;
}

function ProfileScreenContent() {
  const insets = useSafeAreaInsets();
  const { signOut } = useClerk();

  return (
    <View className="flex-1 bg-[#F1F5F9]">
      <ProfileHeader profile={dummyUserProfile} />

      <ScrollView
        style={{ marginTop: -28 }}
        contentContainerClassName="gap-4 px-5"
        contentContainerStyle={{ paddingBottom: insets.bottom + 10 }}
        showsVerticalScrollIndicator={false}
      >
        <AboutMeCard aboutMe={dummyUserProfile.aboutMe} />
        <SafetyVerificationCard />
        <PreferencesCard preferences={dummyUserProfile.preferences} />

        <Pressable
          onPress={() => signOut()}
          className="flex-row items-center justify-center gap-2 rounded-full bg-[#3B82F6] py-4"
        >
          <SymbolView
            name="rectangle.portrait.and.arrow.right"
            tintColor="white"
            size={18}
            weight="semibold"
          />
          <Text className="text-base font-semibold text-white">Sign Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
