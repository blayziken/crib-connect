import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export function SafetyVerificationCard() {
  return (
    <View
      className="rounded-[20px] bg-white px-5 py-7"
      style={{
        shadowColor: "#0F172A",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      }}
    >
      <Text className="text-[15px] font-bold text-[#0F172A]">
        Safety & Verification
      </Text>

      <Pressable className="mt-4 flex-row items-center gap-3.5">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-[#DCFCE7]">
          <SymbolView
            name="checkmark.shield.fill"
            tintColor="#22C55E"
            size={30}
          />
        </View>

        <View className="flex-1">
          <Text className="text-[15px] font-bold text-[#0F172A]">
            Your profile is verified
          </Text>
          <Text className="mt-0.5 text-[13px] text-[#94A3B8]">
            Students can trust you
          </Text>
        </View>

        <SymbolView
          name="chevron.right"
          tintColor="#94A3B8"
          size={16}
          weight="semibold"
        />
      </Pressable>
    </View>
  );
}
