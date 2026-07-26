import type { Conversation } from "@/features/messages/types";
import { SymbolView } from "expo-symbols";
import { Image, Text, View } from "react-native";

type ConversationRowProps = {
  conversation: Conversation;
};

export function ConversationRow({ conversation }: ConversationRowProps) {
  return (
    <View className="flex-row items-start gap-3 px-4 py-5">
      <View className="relative">
        <Image
          source={{ uri: conversation.avatarUrl }}
          className="h-[52px] w-[52px] rounded-full"
        />
        <View className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22C55E]" />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center justify-between gap-2">
          <View className="flex-1 flex-row items-center gap-1.5">
            <Text
              className="text-[16px] font-bold text-[#0F172A]"
              numberOfLines={1}
            >
              {conversation.name}
            </Text>
            {conversation.isOnline && (
              <View className="flex-row items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-0.5">
                <SymbolView
                  name="checkmark.circle.fill"
                  tintColor="#16A34A"
                  size={11}
                />
                <Text className="text-[11px] font-semibold text-[#16A34A]">
                  Online
                </Text>
              </View>
            )}
          </View>
          <Text className="text-[12px] text-[#94A3B8]">
            {conversation.timestamp}
          </Text>
        </View>

        <View className="mt-2 flex-row items-end justify-between gap-2">
          <Text
            className="flex-1 text-[14px] leading-[19px] text-[#64748B]"
            numberOfLines={2}
          >
            {conversation.lastMessage}
          </Text>
          {conversation.unreadCount > 0 && (
            <View className="h-6 w-6 items-center justify-center rounded-full bg-[#3B82F6]">
              <Text className="text-[12px] font-bold text-white">
                {conversation.unreadCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
