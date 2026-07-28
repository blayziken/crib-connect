import { SafetyBanner } from "@/components/common/SafetyBanner";
import { ConversationRow } from "@/components/messages/ConversationRow";
import { MessagesHeader } from "@/components/messages/MessagesHeader";
import { MessagesSearchBar } from "@/components/messages/MessagesSearchBar";
import { dummyConversations } from "@/features/messages/data";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [isSafetyBannerVisible, setIsSafetyBannerVisible] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={["top"]} className="flex-1">
        <View className="px-5">
          <MessagesHeader />
          <MessagesSearchBar value={search} onChangeText={setSearch} />
        </View>

        <ScrollView
          contentContainerClassName="px-5 pb-5"
          contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            className="mt-5 rounded-[20px] bg-white"
            style={{
              shadowColor: "#0F172A",
              shadowOpacity: 0.1,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 4 },
              elevation: 3,
            }}
          >
            {dummyConversations.map((conversation, index) => (
              <View key={conversation.id}>
                <ConversationRow conversation={conversation} />
                {index < dummyConversations.length - 1 && (
                  <View className="h-px bg-[#F1F5F9]" />
                )}
              </View>
            ))}
          </View>

          {isSafetyBannerVisible && (
            <View className="mt-5">
              <SafetyBanner onDismiss={() => setIsSafetyBannerVisible(false)} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
