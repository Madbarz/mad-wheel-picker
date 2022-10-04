import { PickerIOS } from '@react-native-picker/picker';
import React from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  requireNativeComponent,
  ViewStyle,
} from 'react-native';

export type MadWheelPickerItemProps = { label: string; value: number };
type NativePickerProps = {
  data: MadWheelPickerItemProps[];
  selectedIndex: number;
  onValueChange: (e: NativeSyntheticEvent<{ data: number }>) => void;
  textColor: string;
  selectedTextColor: string;
  textSize: number;
  itemSpace: number;
  style: ViewStyle;
};

type MadWheelPicker = {
  data: MadWheelPickerItemProps[];
  selectedValue: number;
  itemSpace: number;
  textSize: number;
  textColor: string;
  selectedTextColor: string;
  onValueChange: (v: number) => void;
  style: ViewStyle;
};

const AndroidWheelPicker =
  requireNativeComponent<NativePickerProps>('MadWheelPicker');

class PickerItem extends React.Component<MadWheelPickerItemProps> {
  render(): React.ReactNode {
    return null;
  }
}

class WheelCurvedPicker extends React.PureComponent<MadWheelPicker> {
  constructor(props: MadWheelPicker) {
    super(props);
  }
  static Item: typeof PickerItem = PickerItem;

  private onValueChange = (e: NativeSyntheticEvent<{ data: number }>) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e.nativeEvent.data);
    }
  };

  render() {
    return (
      <AndroidWheelPicker
        {...this.props}
        onValueChange={this.onValueChange}
        data={this.props.data}
        textSize={this.props.textSize}
        selectedTextColor={this.props.selectedTextColor}
        textColor={this.props.textColor}
        itemSpace={this.props.itemSpace}
        selectedIndex={this.props.selectedValue}
      />
    );
  }
}

const MadWheelPicker = Platform.OS === 'ios' ? PickerIOS : WheelCurvedPicker;
export default MadWheelPicker;
