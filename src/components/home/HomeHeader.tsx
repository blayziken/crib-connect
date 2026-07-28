import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[26px] font-extrabold tracking-tight">
        <Text style={{ color: "#3B82F6" }}>Crib</Text>
        <Text style={{ color: "#0F172A" }}>Connect</Text>
      </Text>

      <Pressable
        onPress={() => router.push("/notifications")}
        className="h-10 w-10 items-center justify-center"
      >
        <View>
          <SymbolView
            name="bell"
            tintColor="#0F172A"
            size={24}
            weight="regular"
          />
          <View className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#EF4444]" />
        </View>
      </Pressable>
    </View>
  );
}
