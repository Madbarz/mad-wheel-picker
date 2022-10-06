import { PickerIOS } from '@react-native-picker/picker';
import { Platform } from 'react-native';
import { WheelCurvedPicker } from './WheelCurvedPicker';

const MadPicker = Platform.OS === 'ios' ? PickerIOS : WheelCurvedPicker;
export default MadPicker;
