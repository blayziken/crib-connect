import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

type ListingSummaryProps = {
  title: string;
  price: number;
  distanceFromCampusKm: number;
};

export function ListingSummary({
  title,
  price,
  distanceFromCampusKm,
}: ListingSummaryProps) {
  return (
    <View>
      <View className="flex-row items-center gap-1">
        <SymbolView
          name="mappin"
          tintColor="#3B82F6"
          size={16}
          weight="semibold"
        />
        <Text className="text-[13px] font-semibold text-[#3B82F6]">
          {distanceFromCampusKm} km from campus
        </Text>
      </View>

      <Text className="mt-2 text-[20px] font-bold text-[#0F172A]">{title}</Text>

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-baseline gap-1">
          <Text className="text-[20px] font-bold text-[#3B82F6]">
            ${price.toLocaleString("en-US")}
          </Text>
          <Text className="text-[12px] text-[#94A3B8]">/month</Text>
        </View>

        <View className="flex-row items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-2">
          <SymbolView
            name="checkmark.circle.fill"
            tintColor="#16A34A"
            size={14}
          />
          <Text className="text-[13px] font-semibold text-[#15803D]">
            Verified
          </Text>
        </View>
      </View>
    </View>
  );
}
