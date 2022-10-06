import { Picker } from '@react-native-picker/picker';
import React, { ReactNode } from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import MadWheelPicker from 'src/Picker/WheelPicker';

interface IMadPicker {
  children: ReactNode | ReactNode[];
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
        <MadWheelPicker {...this.props} itemSpace={this.props.itemSpace}>
          {this.props.children}
        </MadWheelPicker>
      );
    }
    return null;
  }
}

/* <Picker
	selectedValue={this.state.selectedValue} // oboje
	style={wheel} // oboje 
	onValueChange={this.onValueChange} // oboje 
	testID={`modalValue-${testID}`}  // oboje
	itemStyle={wheelLabel}   // IOS prop , samo Ios prikazuje ovo 
	itemSpace={wheelLabelSpace}  // Android prop, samo android prikazuje ovo
	labelPosition={labelPosition} // ???
/> */
