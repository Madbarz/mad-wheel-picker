import { Picker } from '@react-native-picker/picker';
import { Platform } from 'react-native';
import WheelCurvedPicker from 'src/WheelCurvedPicker';

/* 
interface IMadPicker {
  children: ReactElement<WheelCurvedPickerItemProps>;
  selectedValue: number;
  onValueChange: (value: number) => void;
  testID?: string;
  itemStyle?: StyleProp<ViewStyle>;
  itemSpace: number;
} */

export default Platform.OS === 'ios' ? Picker : WheelCurvedPicker;
