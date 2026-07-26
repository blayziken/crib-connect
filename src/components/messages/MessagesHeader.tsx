import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export function MessagesHeader() {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[32px] font-extrabold tracking-tight text-[#0F172A]">
        Messages
      </Text>

      <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6]">
        <SymbolView name="pencil" tintColor="white" size={20} weight="semibold" />
      </Pressable>
    </View>
  );
}
