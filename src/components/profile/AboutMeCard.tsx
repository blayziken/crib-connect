import { Text, View } from "react-native";

type AboutMeCardProps = {
  aboutMe: string;
};

export function AboutMeCard({ aboutMe }: AboutMeCardProps) {
  return (
    <View
      className="rounded-[24px] bg-white p-5"
      style={{
        shadowColor: "#0F172A",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      }}
    >
      <Text className="text-[15px] font-bold text-[#0F172A]">About me</Text>
      <Text className="mt-2.5 text-[15px] leading-[22px] text-[#334155]">
        {aboutMe}
      </Text>
    </View>
  );
}
