import { useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { OnboardingFooter } from "@/components/onboarding/OnboardingFooter";
import { OnboardingSlideView } from "@/components/onboarding/OnboardingSlideView";
import { PaginationDots } from "@/components/onboarding/PaginationDots";
import { onboardingSlides } from "@/features/onboarding/slides";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (index: number) => {
    listRef.current?.scrollToIndex({ index, animated: true });
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const isLast = activeIndex === onboardingSlides.length - 1;

  return (
    <View className="flex-1 bg-[#E6F4FE]">
      <SafeAreaView edges={["top", "bottom"]} className="flex-1">
        <View className="flex-row justify-end px-6 pt-2">
          <Pressable hitSlop={12}>
            <Text className="text-base font-medium text-[#208AEF]">Skip</Text>
          </Pressable>
        </View>

        <FlatList
          ref={listRef}
          data={onboardingSlides}
          keyExtractor={(slide) => slide.id}
          renderItem={({ item }) => <OnboardingSlideView slide={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />

        <View className="flex-1" />

        <View className="pb-6">
          <PaginationDots
            total={onboardingSlides.length}
            activeIndex={activeIndex}
          />
        </View>

        <OnboardingFooter
          showBack={activeIndex > 0}
          nextLabel={isLast ? "Get Started" : "Next"}
          onBack={() => goToIndex(activeIndex - 1)}
          onNext={() => {
            if (!isLast) goToIndex(activeIndex + 1);
          }}
        />
      </SafeAreaView>
    </View>
  );
}
