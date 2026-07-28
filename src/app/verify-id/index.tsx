import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyIdScreen() {
  return (
    <View className="flex-1 bg-[#E6F0FC]">
      <SafeAreaView edges={["top", "bottom"]} className="flex-1">
        <View className="items-end px-6 pt-2">
          <Image
            source={require("@/assets/images/verification/badge.png")}
            style={{ width: 28, aspectRatio: 48 / 56 }}
            contentFit="contain"
          />
        </View>

        <View className="items-center px-8">
          <Image
            source={require("@/assets/images/verification/verification-shield.png")}
            style={{ width: 220, aspectRatio: 270 / 169 }}
            contentFit="contain"
          />

          <View className="mt-1 flex-row items-center gap-2">
            <Text className="text-[23px] font-bold text-[#0F172A]">
              Let’s verify you
            </Text>
            <Text className="text-[26px]">👋</Text>
          </View>

          <Text className="mt-2 text-center text-[13px] leading-[21px] text-[#64748B]">
            To keep CribConnect safe and trusted,{"\n"}we verify all students.
          </Text>
        </View>

        <View
          className="mx-6 mt-5 rounded-[20px] bg-white px-5 py-6"
          style={{
            shadowColor: "#0F172A",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 4 },
            elevation: 3,
          }}
        >
          <Text className="text-[17px] font-bold leading-[22px] text-[#0F172A]">
            Upload Student ID or{"\n"}Enrollment Letter
          </Text>
          <Text className="mt-1 text-[13px] text-[#94A3B8]">
            Clear photo or PDF
          </Text>

          <Pressable className="mt-4 items-center rounded-2xl border border-dashed border-[#BFDBFE] bg-[#F8FBFF] py-7">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-[#208AEF]">
              <SymbolView
                name="arrow.up.doc.fill"
                tintColor="white"
                size={22}
              />
            </View>
            <Text className="mt-3 text-[14px] font-medium text-[#334155]">
              Tap to upload or drag and drop
            </Text>
            <Text className="mt-1 text-[12px] text-[#94A3B8]">
              JPG, PNG or PDF (Max 10MB)
            </Text>
          </Pressable>
        </View>

        <View className="py-5" />

        <View className="flex-row items-center justify-center gap-2 px-10">
          <SymbolView name="lock.fill" tintColor="#334155" size={14} />
          <Text className="text-center text-[13px] leading-[18px] text-[#64748B]">
            Your information is private and{"\n"}never shared with landlords.
          </Text>
        </View>

        <View className="py-5" />

        <View className="mx-6 mb-4 mt-5 flex-row items-center gap-3 rounded-2xl bg-[#DBEAFE] px-4 py-4">
          <SymbolView name="clock" tintColor="#208AEF" size={50} />
          <View className="flex-1">
            <Text className="text-[15px] font-bold text-[#0F172A]">
              Pending Review
            </Text>
            <Text className="mt-0.5 text-[13px] leading-[17px] text-[#475569]">
              We’ll review your document and notify you within 24 hours.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
