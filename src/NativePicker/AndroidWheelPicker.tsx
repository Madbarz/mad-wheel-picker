import { type NativeSyntheticEvent, type StyleProp, type ViewStyle } from "react-native";
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

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

export const AndroidWheelPicker = codegenNativeComponent<NativePickerProps>("MadWheelPicker");
