import React, { Children, ReactElement } from 'react';
import type { NativeSyntheticEvent, StyleProp, TextStyle } from 'react-native';
import { AndroidWheelPicker } from './NativePicker/AndroidWheelPicker';

export type WheelCurvedPickerItemProps = { label: string; value: number };
interface IWheelCurvedPicker {
  children: ReactElement<WheelCurvedPickerItemProps>;
  selectedValue?: number | string | undefined;
  itemSpace?: number;
  selectedTextColor?: string;
  textColor?: string;
  textSize?: number;
  onValueChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
}
type WheelCurvedPickerState = {
  selectedIndex: number;
  data: WheelCurvedPickerItemProps[];
};

class PickerItem extends React.Component<WheelCurvedPickerItemProps> {
  render(): React.ReactNode {
    return null;
  }
}

export class WheelCurvedPicker extends React.Component<
  IWheelCurvedPicker,
  WheelCurvedPickerState
> {
  constructor(props: IWheelCurvedPicker) {
    super(props);
    this.state = {
      selectedIndex: 0,
      data: [],
    };
  }
  static Item: typeof PickerItem = PickerItem;

  static getDerivedStateFromProps(
    props: IWheelCurvedPicker
  ): WheelCurvedPickerState {
    let selectedIndex = 0;
    const data: WheelCurvedPickerState['data'] = [];
    Children.forEach(props.children, (child, index) => {
      const childIsAlsoTheSelectedItem =
        child.props.value === props.selectedValue;
      if (childIsAlsoTheSelectedItem) {
        selectedIndex = index;
      }
      data.push({ label: child.props.label, value: child.props.value });
    });

    return {
      selectedIndex,
      data,
    };
  }

  private changeValue = (e: NativeSyntheticEvent<{ data: number }>) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e.nativeEvent.data);
    }
  };

  render() {
    return (
      <AndroidWheelPicker
        style={this.props.style}
        onValueChange={this.changeValue}
        data={this.state.data}
        textSize={this.props.textSize}
        selectedTextColor={this.props.selectedTextColor}
        textColor={this.props.textColor}
        itemSpace={this.props.itemSpace}
        selectedIndex={this.state.selectedIndex}
      />
    );
  }
}
