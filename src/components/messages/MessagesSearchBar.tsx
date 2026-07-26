import { SymbolView } from "expo-symbols";
import { Pressable, TextInput, View } from "react-native";

type MessagesSearchBarProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  onFilterPress?: () => void;
};

export function MessagesSearchBar({
  value,
  onChangeText,
  onFilterPress,
}: MessagesSearchBarProps) {
  return (
    <View className="mt-4 h-[52px] flex-row items-center gap-2 rounded-2xl bg-[#F1F5F9] px-4">
      <SymbolView name="magnifyingglass" tintColor="#94A3B8" size={20} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search messages"
        placeholderTextColor="#94A3B8"
        className="flex-1 text-[15px] text-[#0F172A]"
      />
      <Pressable onPress={onFilterPress} className="h-6 w-6 items-center justify-center">
        <SymbolView name="slider.horizontal.3" tintColor="#64748B" size={19} />
      </Pressable>
    </View>
  );
}
