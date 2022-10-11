import { PickerIOS } from "@react-native-picker/picker";
import { Platform } from "react-native";
import { WheelCurvedPicker } from "./WheelCurvedPicker";
export type ItemValue = string | number;
const MadPicker = Platform.OS === "ios" ? PickerIOS : WheelCurvedPicker;
export default MadPicker;
