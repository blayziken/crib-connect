import { Image } from "expo-image";
import { Text, View, useWindowDimensions } from "react-native";

import type { OnboardingSlide } from "@/features/onboarding/slides";

type OnboardingSlideViewProps = {
  slide: OnboardingSlide;
};

export function OnboardingSlideView({ slide }: OnboardingSlideViewProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }}>
      <View className="items-center px-9 pt-4">
        <Image
          source={slide.image}
          style={{ width: "100%", aspectRatio: slide.aspectRatio }}
          contentFit="contain"
        />
      </View>

      <View className="px-8 pt-8">
        <Text className="text-center text-[26px] font-bold leading-[32px] text-[#0F172A]">
          {slide.title}
        </Text>
        <Text className="mt-3 text-center text-base leading-6 text-[#64748B]">
          {slide.description}
        </Text>
      </View>
    </View>
  );
}
