import MadPicker, {type ItemValue} from 'mad-wheel-picker';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export default function App() {
  const values = generatePickerItems();
  const [state, setState] = useState(25);
  console.log('selectedValue: ', state);

  return (
    <View style={styles.container}>
      <MadPicker
        selectedValue={state}
        onValueChange={onValueChange}
        style={styles.wheel}
        textSize={32}
        itemSpace={24}>
        {values.map(({label, value}) => (
          <MadPicker.Item label={label} value={value} key={label} />
        ))}
      </MadPicker>
    </View>
  );

  function onValueChange(selectedValue: ItemValue) {
    setState(selectedValue as number);
  }
}

function generatePickerItems() {
  return [...Array(100).keys()].map((num, index) => ({
    label: num.toString(),
    value: index,
  }));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheel: {
    width: '100%',
    height: 300,
  },
});
