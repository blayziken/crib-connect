import { useClerk } from "@clerk/expo";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { signOut } = useClerk();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={["top", "bottom"]} className="flex-1 px-8">
        <View className="flex-1 items-center justify-center">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#E6F4FE]">
            <SymbolView
              name="person.fill"
              tintColor="#208AEF"
              size={28}
              weight="semibold"
            />
          </View>
          <Text className="mt-6 text-center text-[22px] font-bold text-[#0F172A]">
            Profile
          </Text>
          <Text className="mt-2 text-center text-sm text-[#94A3B8]">
            This is a placeholder screen.{"\n"}The real experience is coming
            soon.
          </Text>
        </View>

        <Pressable
          onPress={() => signOut()}
          className="mb-4 w-full flex-row items-center justify-center gap-2 rounded-full bg-[#0F172A] py-4"
        >
          <SymbolView
            name="rectangle.portrait.and.arrow.right"
            tintColor="white"
            size={18}
            weight="semibold"
          />
          <Text className="text-base font-semibold text-white">Sign Out</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
