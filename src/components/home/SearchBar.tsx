import { SymbolView } from "expo-symbols";
import { Pressable, TextInput, View } from "react-native";

type SearchBarProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  onFilterPress?: () => void;
};

export function SearchBar({
  value,
  onChangeText,
  onFilterPress,
}: SearchBarProps) {
  return (
    <View className="mt-4 flex-row items-center gap-3">
      <View className="h-[52px] flex-1 flex-row items-center gap-2 rounded-full bg-[#F1F5F9] px-4">
        <SymbolView name="magnifyingglass" tintColor="#94A3B8" size={20} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search by location, area or title..."
          placeholderTextColor="#94A3B8"
          className="flex-1 text-[15px] text-[#0F172A]"
        />
      </View>

      <Pressable
        onPress={onFilterPress}
        className="h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#3B82F6]"
      >
        <SymbolView
          name="line.3.horizontal.decrease"
          tintColor="white"
          size={18}
          weight="semibold"
        />
      </Pressable>
    </View>
  );
}
