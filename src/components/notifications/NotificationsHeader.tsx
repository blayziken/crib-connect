import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export function NotificationsHeader() {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[30px] font-extrabold tracking-tight text-[#0F172A]">
        Notifications
      </Text>

      <Pressable className="h-10 w-10 items-center justify-center">
        <SymbolView name="gearshape" tintColor="#3B82F6" size={24} weight="regular" />
      </Pressable>
    </View>
  );
}
