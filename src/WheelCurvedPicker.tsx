import React, { Children, ReactElement } from 'react';
import type { NativeSyntheticEvent, StyleProp, TextStyle } from 'react-native';
import { AndroidWheelPicker } from './NativePicker/AndroidWheelPicker';

export type WheelCurvedPickerItemProps = { label: string; value: number };
interface IWheelCurvedPicker {
  children: ReactElement<WheelCurvedPickerItemProps>;
  selectedValue?: string | number;
  /**
   * Defines the space between each picker item.
   * Platform Android
   * @defaultValue `18`
   */
  itemSpace?: number;
  /**
   * Defines the color of the central item.
   * @defaultValue `#000000`
   * Platform Android
   */
  selectedTextColor?: string;
  /**
   * Defines the color of the background items.
   * @defaultValue `#AAAAAA`
   * Platform Android
   */
  textColor?: string;
  /**
   * Defines the font size for all items.
   * @defaultValue `50`
   * Platform Android
   */
  textSize?: number;
  onValueChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
}
type WheelCurvedPickerState = {
  selectedIndex: number;
  data: WheelCurvedPickerItemProps[];
};

const PickerItem = (_props: WheelCurvedPickerItemProps): null => {
  return null;
};

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
