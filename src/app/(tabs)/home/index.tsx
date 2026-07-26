import { HomeHeader } from "@/components/home/HomeHeader";
import { ListingCard } from "@/components/home/ListingCard";
import { SearchBar } from "@/components/home/SearchBar";
import { dummyListings } from "@/features/listings/data";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { useState } from "react";
import { FlatList, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return <HomeScreen />;
}

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState(dummyListings);

  const toggleSave = (id: string) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, isSaved: !listing.isSaved } : listing,
      ),
    );
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={["top"]} className="flex-1">
        <View className="px-5">
          <HomeHeader />
        </View>

        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListingCard listing={item} onToggleSave={toggleSave} />
          )}
          ItemSeparatorComponent={() => <View className="h-5" />}
          ListHeaderComponent={
            <View className="pb-5">
              <SearchBar value={search} onChangeText={setSearch} />
            </View>
          }
          contentContainerClassName="px-5"
          contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}
