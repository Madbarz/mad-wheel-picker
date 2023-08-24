import React, { Children, type ReactElement, type ReactNode } from "react";
import type { NativeSyntheticEvent, StyleProp, TextStyle } from "react-native";
import MadWheelPickerView from "./MadWheelPickerViewNativeComponent";

export type WheelCurvedPickerItemProps = { label: string; value: number };
export type ItemValue = string | number;
interface IWheelCurvedPicker {
  children: ReactNode;
  selectedValue?: string | number;
  /**
   * Defines the space between each picker item.
   * @defaultValue `18`
   * @Platform Android
   */
  itemSpace?: number;
  /**
   * Defines the color of the central item.
   * @defaultValue `#000000`
   * @Platform Android
   */
  selectedTextColor?: string;
  /**
   * Defines the color of the background items.
   * @defaultValue `#AAAAAA`
   * @Platform Android
   */
  textColor?: string;
  /**
   * Defines the font size for all items.
   * @defaultValue `50`
   * @Platform Android
   */
  textSize?: number;
  onValueChange: (value: ItemValue) => void;
  style?: StyleProp<TextStyle>;
}
type WheelCurvedPickerState = {
  selectedIndex: number;
  data: WheelCurvedPickerItemProps[];
};

const PickerItem = (_props: WheelCurvedPickerItemProps): null => {
  return null;
};

export class WheelCurvedPicker extends React.Component<IWheelCurvedPicker, WheelCurvedPickerState> {
  constructor(props: IWheelCurvedPicker) {
    super(props);
    this.state = {
      selectedIndex: 0,
      data: []
    };
  }
  static Item: typeof PickerItem = PickerItem;

  static getDerivedStateFromProps(props: IWheelCurvedPicker): WheelCurvedPickerState {
    let selectedIndex = 0;
    const data: WheelCurvedPickerState["data"] = [];
    Children.forEach(props.children as ReactElement<WheelCurvedPickerItemProps>, (child, index) => {
      const childIsAlsoTheSelectedItem = child.props.value === props.selectedValue;
      if (childIsAlsoTheSelectedItem) {
        selectedIndex = index;
      }
      data.push({ label: child.props.label, value: child.props.value });
    });

    return {
      selectedIndex,
      data
    };
  }

  private changeValue = (e: NativeSyntheticEvent<{ data: number }>) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e.nativeEvent.data);
    }
  };

  render() {
    return (
      <MadWheelPickerView
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
