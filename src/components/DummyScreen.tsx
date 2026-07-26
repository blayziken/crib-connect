import { SymbolView, type SFSymbol } from "expo-symbols";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type DummyScreenProps = {
  title: string;
  icon: SFSymbol;
};

export function DummyScreen({ title, icon }: DummyScreenProps) {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={["top", "bottom"]} className="flex-1">
        <View className="flex-1 items-center justify-center px-8">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#E6F4FE]">
            <SymbolView
              name={icon}
              tintColor="#208AEF"
              size={28}
              weight="semibold"
            />
          </View>
          <Text className="mt-6 text-center text-[22px] font-bold text-[#0F172A]">
            {title}
          </Text>
          <Text className="mt-2 text-center text-sm text-[#94A3B8]">
            This is a placeholder screen.{"\n"}The real experience is coming
            soon.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
