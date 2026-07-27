import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type AboutPlaceSectionProps = {
  description: string;
};

export function AboutPlaceSection({ description }: AboutPlaceSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="border-t border-[#F1F5F9] pt-5">
      <Text className="text-[14px] font-bold text-[#0F172A]">
        About this place
      </Text>
      <Text
        numberOfLines={expanded ? undefined : 3}
        className="mt-2 text-[14px] leading-[21px] text-[#64748B]"
      >
        {description}
      </Text>

      <Pressable
        onPress={() => setExpanded((prev) => !prev)}
        hitSlop={8}
        className="mt-2 flex-row items-center gap-1 self-start"
      >
        <Text className="text-[14px] font-semibold text-[#3B82F6]">
          {expanded ? "Read less" : "Read more"}
        </Text>
        <SymbolView
          name={expanded ? "chevron.up" : "chevron.down"}
          tintColor="#3B82F6"
          size={12}
          weight="bold"
        />
      </Pressable>
    </View>
  );
}
