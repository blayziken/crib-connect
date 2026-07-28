import type { NotificationCategory } from "@/features/notifications/types";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Pressable, ScrollView, Text, View } from "react-native";

export type NotificationFilter = "all" | NotificationCategory;

const FILTERS: {
  key: NotificationFilter;
  label: string;
  icon: SymbolViewProps["name"];
}[] = [
  { key: "all", label: "All", icon: "list.bullet" },
  { key: "messages", label: "Messages", icon: "bubble.left.fill" },
  { key: "bookings", label: "Bookings", icon: "calendar" },
  { key: "system", label: "System", icon: "bell.fill" },
];

type NotificationFilterTabsProps = {
  value: NotificationFilter;
  onChange: (filter: NotificationFilter) => void;
};

export function NotificationFilterTabs({
  value,
  onChange,
}: NotificationFilterTabsProps) {
  return (
    <View className="h-12 mb-3">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="h-9 items-center gap-1.5 px-5"
      >
        {FILTERS.map((filter) => {
          const isActive = filter.key === value;
          return (
            <Pressable
              key={filter.key}
              onPress={() => onChange(filter.key)}
              className={`h-9 flex-row items-center gap-1 rounded-full px-3 ${
                isActive ? "bg-[#3B82F6]" : "bg-[#F1F5F9]"
              }`}
            >
              <SymbolView
                name={filter.icon}
                tintColor={isActive ? "#FFFFFF" : "#475569"}
                size={12}
                weight="semibold"
                style={{ width: 12, height: 12 }}
              />
              <Text
                className={`text-[13px] font-semibold ${
                  isActive ? "text-white" : "text-[#475569]"
                }`}
              >
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
