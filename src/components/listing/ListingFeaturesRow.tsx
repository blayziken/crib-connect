import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Text, View } from "react-native";

type Feature = {
  key: string;
  icon: SymbolViewProps["name"];
  label: string;
};

type ListingFeaturesRowProps = {
  furnished: boolean;
  utilitiesIncluded: boolean;
  bedrooms: number;
};

export function ListingFeaturesRow({
  furnished,
  utilitiesIncluded,
  bedrooms,
}: ListingFeaturesRowProps) {
  const features: Feature[] = [
    {
      key: "furnished",
      icon: "sofa.fill",
      label: furnished ? "Furnished" : "Unfurnished",
    },
    {
      key: "utilities",
      icon: "bolt.fill",
      label: utilitiesIncluded ? "Utilities Included" : "Utilities Excluded",
    },
    {
      key: "bedrooms",
      icon: "bed.double.fill",
      label: `${bedrooms} Bedroom${bedrooms === 1 ? "" : "s"}`,
    },
    {
      key: "wifi",
      icon: "wifi",
      label: "High Speed Wi‑Fi",
    },
  ];

  return (
    <View className="flex-row">
      {features.map((feature) => (
        <View key={feature.key} className="flex-1 items-center">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#AED0FA5E]">
            <SymbolView
              name={feature.icon}
              tintColor="#3B82F6"
              size={25}
              weight="semibold"
            />
          </View>
          <Text className="mt-2 text-center text-[11.5px] text-[#334155]">
            {feature.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
