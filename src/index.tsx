import { Picker } from '@react-native-picker/picker';
import React, { ReactElement } from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import WheelCurvedPicker, {
  WheelCurvedPickerItemProps,
} from 'src/WheelCurvedPicker';

interface IMadPicker {
  children: ReactElement<WheelCurvedPickerItemProps>;
  selectedValue: number;
  onValueChange: (value: number) => void;
  testID?: string;
  itemStyle?: StyleProp<ViewStyle>;
  itemSpace: number;
}
export default class MadPicker extends React.Component<IMadPicker> {
  constructor(props: IMadPicker) {
    super(props);
  }

  render(): React.ReactNode {
    if (Platform.OS === 'ios') {
      return (
        <Picker {...this.props} itemStyle={this.props.itemStyle}>
          {this.props.children}
        </Picker>
      );
    }
    if (Platform.OS === 'android') {
      return (
        <WheelCurvedPicker {...this.props} itemSpace={this.props.itemSpace}>
          {this.props.children}
        </WheelCurvedPicker>
      );
    }
    return null;
  }
}
