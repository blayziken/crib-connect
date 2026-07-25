export type ListingType = "private_room" | "entire_unit" | "shared_room";

export type ListingPrice = {
  amount: number;
  currency: string;
  period: "month";
  isUtilitiesIncluded: boolean;
};

export type Listing = {
  id: string;
  title: string;
  description: string;
  type: ListingType;
  price: ListingPrice;
  bedrooms: number;
  furnished: boolean;
  images: string[];
  address: string;
  latitude: number;
  longitude: number;
  distanceFromCampusKm: number;
  isSaved: boolean;
};
