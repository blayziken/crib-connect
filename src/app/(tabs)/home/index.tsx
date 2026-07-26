import { CribConnectLogo } from "@/components/auth/CribConnectLogo";
import { useAuth, useUser } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return <HomeScreen />;
}

function HomeScreen() {
  const { user } = useUser();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView
        edges={["top", "bottom"]}
        className="flex-1 items-center px-8"
      >
        <View className="flex-1 items-center justify-center">
          <CribConnectLogo size={72} />
          <Text className="mt-6 text-center text-[22px] font-bold text-[#0F172A]">
            Welcome{user?.firstName ? `, ${user.firstName}` : ""}!
          </Text>
          <Text className="mt-2 text-center text-base text-[#64748B]">
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
          <Text className="mt-8 text-center text-sm text-[#94A3B8]">
            This is a placeholder home screen.{"\n"}The real experience is
            coming soon, keep calm.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
