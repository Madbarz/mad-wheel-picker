import React, { Children, ReactNode } from 'react';
import type {
  NativeSyntheticEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { AndroidWheelPicker } from 'src/AndroidWheelPicker';

export type MadWheelPickerItemProps = { label: string; value: number };
export interface IMadWheelPicker {
  children?: ReactNode;
  selectedValue?: number | string | undefined;
  itemSpace?: number;
  selectedTextColor?: string;
  onValueChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
}
type MadWheelPickerState = {
  selectedIndex: number;
  data: MadWheelPickerItemProps[];
  color: string;
  size: number;
};

class PickerItem extends React.Component<MadWheelPickerItemProps> {
  render(): React.ReactNode {
    return null;
  }
}

const defaultContainerStyle: ViewStyle = {
  height: 280,
};

export default class WheelCurvedPicker extends React.Component<
  IMadWheelPicker,
  MadWheelPickerState
> {
  constructor(props: IMadWheelPicker) {
    super(props);
    this.state = {
      selectedIndex: 0,
      data: [],
      color: 'black',
      size: 26,
    };
  }
  static Item: typeof PickerItem = PickerItem;

  static getDerivedStateFromProps(props: IMadWheelPicker): MadWheelPickerState {
    let selectedIndex = 0;
    const data: MadWheelPickerState['data'] = [];
    Children.toArray(props.children).forEach((child, index) => {
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
      color: (props.itemStyle.color as string) || 'black',
      size: props.itemStyle.fontSize || 26,
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
        style={(this.props.style, defaultContainerStyle)}
        onValueChange={this.changeValue}
        data={this.state.data}
        textSize={this.state.size}
        selectedTextColor={this.props.selectedTextColor}
        textColor={this.state.color}
        itemSpace={this.props.itemSpace}
        selectedIndex={this.state.selectedIndex}
      />
    );
  }
}
