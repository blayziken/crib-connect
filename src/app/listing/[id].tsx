import { AboutPlaceSection } from "@/components/listing/AboutPlaceSection";
import { LandlordCard } from "@/components/listing/LandlordCard";
import { ListingFeaturesRow } from "@/components/listing/ListingFeaturesRow";
import { ListingImageCarousel } from "@/components/listing/ListingImageCarousel";
import { ListingSummary } from "@/components/listing/ListingSummary";
import { getListingById } from "@/features/listings/data";
import { router, useLocalSearchParams } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ListingDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing = getListingById(id);
  const insets = useSafeAreaInsets();
  const [isSaved, setIsSaved] = useState(listing?.isSaved ?? false);

  if (!listing) return null;

  return (
    <View className="flex-1 bg-white">
      <ListingImageCarousel
        images={listing.images}
        isSaved={isSaved}
        onBackPress={() => router.back()}
        onToggleSave={() => setIsSaved((prev) => !prev)}
      />

      <ScrollView
        style={{ marginTop: -28 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        className="rounded-t-[28px] bg-white"
      >
        <View className="gap-5 px-5 pb-2 pt-6">
          <ListingSummary
            title={listing.title}
            price={listing.price.amount}
            distanceFromCampusKm={listing.distanceFromCampusKm}
          />

          <ListingFeaturesRow
            furnished={listing.furnished}
            utilitiesIncluded={listing.price.isUtilitiesIncluded}
            bedrooms={listing.bedrooms}
          />

          <AboutPlaceSection description={listing.description} />

          <LandlordCard />
        </View>
      </ScrollView>

      <View
        className="bg-white px-5 pt-3"
        style={{ paddingBottom: insets.bottom + 12 }}
      >
        <Pressable className="flex-row items-center justify-center gap-2.5 rounded-2xl bg-[#3B82F6] py-4">
          <Text className="text-[16px] font-bold text-white">Request Info</Text>
          <SymbolView
            name="paperplane.fill"
            tintColor="white"
            size={16}
            weight="semibold"
          />
        </Pressable>
      </View>
    </View>
  );
}
