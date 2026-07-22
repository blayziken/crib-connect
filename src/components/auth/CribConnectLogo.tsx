import Svg, { Circle, Line, Path } from "react-native-svg";

type CribConnectLogoProps = {
  size?: number;
  color?: string;
};

export function CribConnectLogo({
  size = 96,
  color = "#208AEF",
}: CribConnectLogoProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Path
        d="M50 14 L16 46 L27 46 L27 80 L13 80"
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M50 14 L84 46 L73 46 L73 80 L87 80"
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={50} cy={54} r={10} stroke={color} strokeWidth={7} />
      <Line
        x1={50}
        y1={64}
        x2={50}
        y2={88}
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <Line
        x1={50}
        y1={82}
        x2={59}
        y2={82}
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
      />
    </Svg>
  );
}
