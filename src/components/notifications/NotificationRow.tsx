import type { NotificationItem } from "@/features/notifications/types";
import { SymbolView } from "expo-symbols";
import { Image, Text, View } from "react-native";

type NotificationRowProps = {
  notification: NotificationItem;
};

export function NotificationRow({ notification }: NotificationRowProps) {
  return (
    <View
      className="flex-row items-center gap-3 rounded-2xl bg-white p-4"
      style={{
        shadowColor: "#0F172A",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
      }}
    >
      <NotificationIcon icon={notification.icon} />

      <View className="flex-1 pt-0.5">
        <Text className="text-[14px] font-bold text-[#0F172A]">
          {notification.title}
        </Text>
        <Text className="mt-1 text-[12px] leading-[19px] text-[#64748B]">
          {notification.description}
          {notification.highlight && (
            <Text className="text-[#3B82F6]">{notification.highlight}</Text>
          )}
        </Text>
      </View>

      <View className="items-end gap-2 pt-0.5">
        <Text className="text-[12px] text-[#94A3B8]">
          {notification.timestamp}
        </Text>
        {notification.isUnread && (
          <View className="h-2 w-2 rounded-full bg-[#3B82F6]" />
        )}
      </View>
    </View>
  );
}

function NotificationIcon({ icon }: { icon: NotificationItem["icon"] }) {
  if (icon.kind === "avatar") {
    return (
      <View className="relative">
        <Image source={{ uri: icon.uri }} className="h-14 w-14 rounded-full" />
        <View className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
      </View>
    );
  }

  if (icon.kind === "photo") {
    return (
      <View className="relative">
        <Image source={{ uri: icon.uri }} className="h-14 w-14 rounded-full" />
        <View className="absolute -bottom-1 -left-1 h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-white">
          <SymbolView name="heart.fill" tintColor="#EF4444" size={10} />
        </View>
      </View>
    );
  }

  return (
    <View
      className="h-14 w-14 items-center justify-center rounded-full"
      style={{ backgroundColor: icon.bgColor }}
    >
      <SymbolView name={icon.name} tintColor={icon.tintColor} size={30} />
    </View>
  );
}
