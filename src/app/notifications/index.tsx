import { SafetyBanner } from "@/components/common/SafetyBanner";
import {
  NotificationFilterTabs,
  type NotificationFilter,
} from "@/components/notifications/NotificationFilterTabs";
import { NotificationRow } from "@/components/notifications/NotificationRow";
import { NotificationsHeader } from "@/components/notifications/NotificationsHeader";
import { dummyNotifications } from "@/features/notifications/data";
import type { NotificationItem } from "@/features/notifications/types";
import { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<NotificationFilter>("all");
  const [isSafetyBannerVisible, setIsSafetyBannerVisible] = useState(true);

  const sections = useMemo(() => {
    const filtered = dummyNotifications.filter(
      (notification) => filter === "all" || notification.category === filter,
    );

    const grouped: { section: string; items: NotificationItem[] }[] = [];
    for (const notification of filtered) {
      const group = grouped.find((g) => g.section === notification.section);
      if (group) {
        group.items.push(notification);
      } else {
        grouped.push({ section: notification.section, items: [notification] });
      }
    }
    return grouped;
  }, [filter]);

  return (
    <View className="flex-1 bg-[#F8FAFC]">
      <SafeAreaView edges={["top"]} className="flex-1">
        <View className="px-5 pb-4">
          <NotificationsHeader />
        </View>

        <NotificationFilterTabs value={filter} onChange={setFilter} />

        <ScrollView
          contentContainerClassName="gap-3 px-5 pb-5 pt-4"
          contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
          showsVerticalScrollIndicator={false}
        >
          {sections.map(({ section, items }) => (
            <View key={section} className="gap-3">
              <Text className="text-[14px] text-[#64748B]">{section}</Text>
              {items.map((notification) => (
                <NotificationRow
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </View>
          ))}

          {isSafetyBannerVisible && (
            <SafetyBanner onDismiss={() => setIsSafetyBannerVisible(false)} />
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
