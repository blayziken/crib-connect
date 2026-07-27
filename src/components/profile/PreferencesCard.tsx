import type { UserProfile } from "@/features/profile/types";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

type PreferencesCardProps = {
  preferences: UserProfile["preferences"];
};

type PreferenceRowProps = {
  icon: SymbolViewProps["name"];
  label: string;
  value: string;
  isLast?: boolean;
};

function PreferenceRow({ icon, label, value, isLast }: PreferenceRowProps) {
  return (
    <Pressable
      className={`py-6 flex-row items-center gap-1.5 py-4 ${isLast ? "" : "border-b border-[#F1F5F9]"}`}
    >
      <SymbolView name={icon} tintColor="#334155" size={16} weight="regular" />
      <Text className="text-[14px] text-[#0F172A]">{label}</Text>
      <View className="flex-1" />
      <Text
        numberOfLines={1}
        className="shrink text-[11px] font-semibold text-[#3B82F6]"
      >
        {value}
      </Text>
      <SymbolView
        name="chevron.right"
        tintColor="#94A3B8"
        size={12}
        weight="semibold"
      />
    </Pressable>
  );
}

export function PreferencesCard({ preferences }: PreferencesCardProps) {
  return (
    <View
      className="rounded-[24px] bg-white px-4 pt-5"
      style={{
        shadowColor: "#0F172A",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      }}
    >
      <Text className="text-[15px] font-bold text-[#0F172A]">Preferences</Text>

      <View className="mt-1">
        <PreferenceRow
          icon="mappin"
          label="Preferred location"
          value={preferences.preferredLocation}
        />
        <PreferenceRow
          icon="house"
          label="Room type"
          value={preferences.roomType}
        />
        <PreferenceRow
          icon="dollarsign.circle"
          label="Budget"
          value={preferences.budget}
        />
        <PreferenceRow
          icon="calendar"
          label="Move-in date"
          value={preferences.moveInDate}
          isLast
        />
      </View>
    </View>
  );
}
