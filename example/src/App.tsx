import React, { useState } from 'react';

import { PickerIOS } from '@react-native-picker/picker';
import Picker from 'mad-wheel-picker';
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
          onValueChange={(v) => setState({ ...state, selectedItem: v })}
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
        <Picker
          onValueChange={onValueChange}
          itemStyle={{ fontSize: 30, color: 'red' }}
          selectedValue={state.selectedItem}
          itemSpace={22}
          style={{
            height: 300,
            width: 'auto',
            backgroundColor: 'grey',
          }}
        >
          {state.itemList.map(({ label, value }) => (
            <Picker.Item value={value} label={label} key={value} />
          ))}
        </Picker>
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
