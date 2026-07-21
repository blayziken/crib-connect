import type { ImageSourcePropType } from "react-native";

export type OnboardingSlide = {
  id: string;
  image: ImageSourcePropType;
  aspectRatio: number;
  title: string;
  description: string;
};

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "distance-to-campus",
    image: require("@/assets/images/onboarding/step-1.png"),
    aspectRatio: 375 / 357,
    title: "Search homes by\ndistance to campus",
    description:
      "Easily find places close to Georgian College\nand cut down your commute.",
  },
  {
    id: "verified-homes",
    image: require("@/assets/images/onboarding/step-2.png"),
    aspectRatio: 396 / 407,
    title: "Verified homes.\nPeace of mind.",
    description:
      "Every listing is checked for safety, quality,\nand student-friendliness.",
  },
  {
    id: "student-community",
    image: require("@/assets/images/onboarding/step-3.png"),
    aspectRatio: 383 / 454,
    title: "Join a community of\nstudents like you",
    description:
      "Thousands of international students in Barrie\nhave already found their home.",
  },
];
