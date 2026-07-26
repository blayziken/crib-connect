import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

type SafetyBannerProps = {
  onDismiss?: () => void;
};

export function SafetyBanner({ onDismiss }: SafetyBannerProps) {
  return (
    <View className="flex-row items-start gap-3 rounded-2xl bg-[#E8F0FE] p-4">
      <View className="self-center">
        <SymbolView
          name="checkmark.shield.fill"
          tintColor="#3B82F6"
          size={50}
        />
      </View>

      <View className="flex-1">
        <Text className="text-[15px] font-bold text-[#0F172A]">
          Your safety is our priority
        </Text>
        <Text className="mt-1 text-[13px] leading-[18px] text-[#64748B]">
          Only verified students and landlords can message you.
        </Text>
      </View>

      <Pressable
        onPress={onDismiss}
        className="h-6 w-6 items-center justify-center"
      >
        <SymbolView
          name="xmark"
          tintColor="#64748B"
          size={15}
          weight="semibold"
        />
      </Pressable>
    </View>
  );
}
