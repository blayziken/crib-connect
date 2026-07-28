import type { SymbolViewProps } from "expo-symbols";

export type NotificationCategory = "messages" | "bookings" | "system";

export type NotificationIcon =
  | { kind: "avatar"; uri: string }
  | { kind: "photo"; uri: string }
  | {
      kind: "symbol";
      name: SymbolViewProps["name"];
      bgColor: string;
      tintColor: string;
    };

export type NotificationItem = {
  id: string;
  category: NotificationCategory;
  section: string;
  title: string;
  description: string;
  highlight?: string;
  timestamp: string;
  isUnread: boolean;
  icon: NotificationIcon;
};
