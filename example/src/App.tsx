import React, { useState } from 'react';

import { PickerIOS } from '@react-native-picker/picker';
import MadWheelPicker from 'mad-wheel-picker';
import { Platform, StyleSheet, View } from 'react-native';

type Foo = {
  selectedItem: number;
  itemList: { label: string; value: number }[];
};

export default function App() {
  const arr = [...Array(300).keys()].map((v, i) => ({
    label: v.toString(),
    value: i,
  }));
  const data: Foo = {
    selectedItem: 2,
    itemList: arr,
  };
  const [state, setState] = useState(data);
  if (Platform.OS === 'ios') {
    return (
      <View style={styles.container}>
        <PickerIOS
          selectedValue={state.selectedItem}
          onValueChange={(v) => setState((s) => ({ ...s, selectedItem: v }))}
        >
          {state.itemList.map(({ label, value }) => (
            <PickerIOS.Item value={value} label={label} key={value} />
          ))}
        </PickerIOS>
      </View>
    );
  } else if (Platform.OS === 'android') {
    return (
      <View style={styles.container}>
        <MadWheelPicker
          data={state.itemList}
          onValueChange={onValueChange}
          textSize={26}
          textColor={'black'}
          selectedTextColor={'red'}
          selectedValue={state.selectedItem}
          itemSpace={22}
          style={{ height: 280, width: '100%' }}
        />
      </View>
    );
  } else {
    return null;
  }
  function onValueChange(value: number) {
    setState((s) => ({ ...s, selectedItem: value }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
