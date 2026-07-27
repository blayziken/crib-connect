import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

export function LandlordCard() {
  return (
    <View className="flex-row items-center justify-between rounded-2xl bg-[#AED0FA5E] px-5 py-5">
      <View className="flex-1 pr-3">
        <Text className="text-[13px] font-bold text-[#0F172A]">
          Landlord / Property Manager
        </Text>
        <Text className="mt-1 text-[13px] leading-[19px] text-[#64748B]">
          Contact details are available after verification.
        </Text>
      </View>

      <View
        className="h-16 w-16 items-center justify-center rounded-full bg-white"
        style={{
          shadowColor: "#0F172A",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <SymbolView name="lock.fill" tintColor="#3B82F6" size={35} />
      </View>
    </View>
  );
}
