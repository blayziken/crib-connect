import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ListingImageCarouselProps = {
  images: string[];
  isSaved: boolean;
  onBackPress?: () => void;
  onToggleSave?: () => void;
  onSharePress?: () => void;
};

export function ListingImageCarousel({
  images,
  isSaved,
  onBackPress,
  onToggleSave,
  onSharePress,
}: ListingImageCarouselProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const height = width * 0.78;

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {images.map((uri) => (
          <Image
            key={uri}
            source={{ uri }}
            style={{ width, height }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      <View
        className="absolute left-5 right-5 flex-row items-center justify-between"
        style={{ top: insets.top + 8 }}
      >
        <Pressable
          onPress={onBackPress}
          hitSlop={8}
          className="h-10 w-10 items-center justify-center rounded-full bg-white"
          style={{
            shadowColor: "#0F172A",
            shadowOpacity: 0.15,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <SymbolView
            name="arrow.left"
            tintColor="#0F172ABE"
            size={18}
            weight="semibold"
          />
        </Pressable>

        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={onToggleSave}
            hitSlop={8}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
            style={{
              shadowColor: "#0F172A",
              shadowOpacity: 0.15,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <SymbolView
              name={isSaved ? "heart.fill" : "heart"}
              tintColor={isSaved ? "#EF4444" : "#0F172ABE"}
              size={18}
              weight="semibold"
            />
          </Pressable>

          <Pressable
            onPress={onSharePress}
            hitSlop={8}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
            style={{
              shadowColor: "#0F172A",
              shadowOpacity: 0.15,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <SymbolView
              name="square.and.arrow.up"
              tintColor="#0F172ABE"
              size={17}
              weight="semibold"
            />
          </Pressable>
        </View>
      </View>

      {images.length > 1 && (
        <View className="absolute bottom-9 right-4 rounded-full bg-black/60 px-3 py-1">
          <Text className="text-[12px] font-semibold text-white">
            {activeIndex + 1} / {images.length}
          </Text>
        </View>
      )}
    </View>
  );
}
