import type { UserProfile } from "./types";

export const dummyUserProfile: UserProfile = {
  name: "Tolu J.",
  avatarUrl:
    "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=300&q=80",
  isVerifiedStudent: true,
  school: "Georgian College",
  program: "Computer Programming",
  aboutMe:
    "International student from Nigeria 🇳🇬. Looking for a clean, quiet place close to campus.",
  isProfileVerified: true,
  preferences: {
    preferredLocation: "Within 5 km of campus",
    roomType: "Private Room",
    budget: "$800 – $1,200 / month",
    moveInDate: "Aug 2025",
  },
};
