import { View } from "react-native";

type PaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function PaginationDots({ total, activeIndex }: PaginationDotsProps) {
  return (
    <View className="flex-row justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === activeIndex ? "bg-[#208AEF]" : "bg-[#CBD5E1]"
          }`}
        />
      ))}
    </View>
  );
}
