import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CribConnectLogo } from "@/components/auth/CribConnectLogo";
import { GoogleGlyph } from "@/components/auth/GoogleGlyph";

export default function AuthScreen() {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={["top", "bottom"]} className="flex-1 px-8">
        <View className="items-center pt-14">
          <CribConnectLogo size={92} />
          <View className="mt-1.5 flex-row">
            <Text className="text-[27px] font-bold text-[#208AEF]">Crib</Text>
            <Text className="text-[27px] font-bold text-[#0F172A]">
              Connect
            </Text>
          </View>

          <Text className="mt-14 text-center text-[26px] font-bold leading-[32px] text-[#0F172A]">
            Find your home{"\n"}near Georgian College
          </Text>

          <Text className="mt-8 text-center text-base leading-6 text-[#64748B]">
            Verified student housing for{"\n"}international students in
            Barrie.
          </Text>

          <View className="mt-7 flex-row items-center gap-1.5 rounded-full bg-[#DCFCE7] px-4 py-2.5">
            <SymbolView
              name="checkmark.shield.fill"
              tintColor="#16A34A"
              size={16}
              weight="semibold"
            />
            <Text className="text-[15px] font-semibold text-[#15803D]">
              Verified Students Only
            </Text>
          </View>
        </View>

        <View className="flex-1" />

        <Pressable
          onPress={() => {}}
          className="flex-row items-center justify-center gap-3 rounded-full bg-white py-4 shadow-md"
        >
          <GoogleGlyph size={20} />
          <Text className="text-base font-semibold text-[#0F172A]">
            Continue with Google
          </Text>
        </Pressable>

        <View className="flex-1" />

        <View className="items-center pb-2">
          <View className="w-full flex-row items-center justify-center gap-3 px-6">
            <SymbolView
              name="lock.fill"
              tintColor="#208AEF"
              size={18}
              weight="semibold"
            />
            <Text className="shrink text-sm leading-5 text-[#64748B]">
              Your information is private and{"\n"}never shared with
              landlords.
            </Text>
          </View>

          <Text className="mt-6 text-center text-xs leading-4 text-[#94A3B8]">
            By continuing, you agree to our{" "}
            <Text className="text-[#208AEF]">Terms of Service</Text>
            {"\n"}and <Text className="text-[#208AEF]">Privacy Policy.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
