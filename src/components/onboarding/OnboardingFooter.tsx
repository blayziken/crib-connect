import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

type OnboardingFooterProps = {
  showBack: boolean;
  nextLabel: string;
  onBack: () => void;
  onNext: () => void;
};

export function OnboardingFooter({
  showBack,
  nextLabel,
  onBack,
  onNext,
}: OnboardingFooterProps) {
  return (
    <View
      className={`flex-row px-6 pb-4 ${showBack ? "justify-between" : "justify-end"}`}
    >
      {showBack ? (
        <Pressable
          onPress={onBack}
          className="rounded-full border-[1.5px] border-[#208AEF] bg-white px-6 py-4"
        >
          <Text className="text-base font-semibold text-[#208AEF]">Back</Text>
        </Pressable>
      ) : null}

      <Pressable
        onPress={onNext}
        className="flex-row items-center gap-1.5 rounded-full bg-[#208AEF] py-4 pl-6 pr-5 shadow-md"
      >
        <Text className="text-base font-semibold text-white">
          {nextLabel}
        </Text>
        <SymbolView
          name="chevron.right"
          tintColor="white"
          size={16}
          weight="semibold"
        />
      </Pressable>
    </View>
  );
}
