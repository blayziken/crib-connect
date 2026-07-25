export type ListingType = "private_room" | "entire_unit" | "shared_room";

export type Listing = {
  id: string;
  title: string;
  description: string;
  type: ListingType;
  price: number;
  currency: string;
  bedrooms: number;
  furnished: boolean;
  utilitiesIncluded: boolean;
  images: string[];
  address: string;
  latitude: number;
  longitude: number;
  distanceFromCampusKm: number;
  isSaved: boolean;
};
