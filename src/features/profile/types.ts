export type UserProfile = {
  name: string;
  avatarUrl: string;
  isVerifiedStudent: boolean;
  school: string;
  program: string;
  aboutMe: string;
  isProfileVerified: boolean;
  preferences: {
    preferredLocation: string;
    roomType: string;
    budget: string;
    moveInDate: string;
  };
};
