import { requireNativeComponent, type NativeSyntheticEvent, type StyleProp, type ViewStyle } from "react-native";

type NativePickerProps = {
  data: { label: string; value: number }[];
  selectedIndex: number;
  onValueChange: (e: NativeSyntheticEvent<{ data: number }>) => void;
  textColor?: string;
  selectedTextColor?: string;
  textSize?: number;
  itemSpace?: number;
  style?: StyleProp<ViewStyle>;
};

export const AndroidWheelPicker = requireNativeComponent<NativePickerProps>("MadWheelPicker");
