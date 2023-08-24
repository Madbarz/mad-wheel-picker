import type { HostComponent, ViewProps } from "react-native";
import type { BubblingEventHandler, Int32, WithDefault } from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

type Event = Readonly<{
  data: Int32;
}>;
type Data = Readonly<{ label: string; value: Int32 }>;
interface NativeProps extends ViewProps {
  data: ReadonlyArray<Data>;
  selectedIndex: Int32;
  onValueChange: BubblingEventHandler<Event>;
  textColor?: WithDefault<string, "#d3d3d3">;
  selectedTextColor?: WithDefault<string, "#000000">;
  textSize?: WithDefault<Int32, 25>;
  itemSpace?: WithDefault<Int32, 28>;
}

export default codegenNativeComponent<NativeProps>("MadWheelPickerView") as HostComponent<NativeProps>;
