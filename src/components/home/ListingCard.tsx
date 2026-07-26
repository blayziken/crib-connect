import type { Listing, ListingType } from "@/features/listings/types";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";

const TYPE_META: Record<
  ListingType,
  { label: string; bg: string; color: string }
> = {
  private_room: { label: "Private Room", bg: "#DBEAFE", color: "#3B82F6" },
  entire_unit: { label: "Entire Unit", bg: "#DCFCE7", color: "#16A34A" },
  shared_room: { label: "Shared Room", bg: "#FFEDD5", color: "#F97316" },
};

type ListingCardProps = {
  listing: Listing;
  onToggleSave?: (id: string) => void;
};

export function ListingCard({ listing, onToggleSave }: ListingCardProps) {
  const meta = TYPE_META[listing.type];
  const bedroomsLabel = `${listing.bedrooms} Bedroom${listing.bedrooms === 1 ? "" : "s"}`;

  return (
    <View
      className="rounded-[20px] bg-white"
      style={{
        shadowColor: "#0F172A",
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      }}
    >
      <View className="relative">
        <Image
          source={{ uri: listing.images[0] }}
          className="w-full rounded-t-[20px]"
          style={{ aspectRatio: 2.3 }}
          resizeMode="cover"
        />

        <Pressable
          onPress={() => onToggleSave?.(listing.id)}
          className="absolute right-3 top-3 h-10 w-10 items-center justify-center rounded-full bg-white"
          style={{
            shadowColor: "#0F172A",
            shadowOpacity: 0.15,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <SymbolView
            name={listing.isSaved ? "heart.fill" : "heart"}
            tintColor={listing.isSaved ? "#EF4444" : "#0F172A"}
            size={18}
            weight="semibold"
          />
        </Pressable>

        <View
          className="absolute bottom-3 left-3 flex-row items-center gap-1 rounded-full bg-white px-3 py-1.5"
          style={{
            shadowColor: "#0F172A",
            shadowOpacity: 0.12,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <SymbolView name="location.fill" tintColor="#3B82F6" size={14} />d
          <Text className="text-[14px] font-semibold text-[#1E293B]">
            {listing.distanceFromCampusKm} km from campus
          </Text>
        </View>
      </View>

      <View className="px-4 pb-4 pt-3.5">
        <View className="flex-row items-center justify-between gap-2">
          <Text
            className="flex-1 text-[15px] font-bold text-[#0F172A]"
            numberOfLines={1}
          >
            {listing.title}
          </Text>
          <View
            className="flex-row items-center gap-1 rounded-full px-3 py-2"
            style={{ backgroundColor: meta.bg }}
          >
            <SymbolView
              name="mappin.circle.fill"
              tintColor={meta.color}
              size={12}
            />
            <Text
              className="text-[12px] font-semibold"
              style={{ color: meta.color }}
            >
              {meta.label}
            </Text>
          </View>
        </View>

        <View className="mt-1.5 flex-row items-baseline gap-1">
          <Text className="text-[22px] font-bold text-[#0F172A]">
            ${listing.price.amount.toLocaleString("en-US")}
          </Text>
          <Text className="text-[13px] text-[#94A3B8]">/month</Text>
        </View>

        <View className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-1.5">
            <SymbolView name="bed.double.fill" tintColor="#475569" size={15} />
            <Text className="text-[12px] text-[#475569]">
              {listing.furnished ? "Furnished" : "Unfurnished"}
            </Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <SymbolView name="bolt.fill" tintColor="#475569" size={15} />
            <Text className="text-[12px] text-[#475569]">
              {listing.price.isUtilitiesIncluded
                ? "Utilities Incl."
                : "Utilities Excl."}
            </Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <SymbolView name="bed.double.fill" tintColor="#475569" size={15} />
            <Text className="text-[12px] text-[#475569]">{bedroomsLabel}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
