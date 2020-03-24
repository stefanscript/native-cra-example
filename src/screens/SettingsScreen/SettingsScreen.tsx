import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

const units = ['min/km', 'min/mile'];
const paces = ['3:00', '4:00'];

const SettingsScreen = () => {
  const [selectedUnit, setUnit] = useState('min/km');
  const [selectedPace, setPace] = useState('3:00');

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.titleBox]}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.subTitle}>Default unit</Text>
      </View>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={selectedUnit}
          style={styles.selector}
          onValueChange={value => setUnit(value)}>
          {units.map(unit => (
            <Picker.Item value={unit} label={unit} />
          ))}
        </Picker>
      </View>

      <View style={styles.box}>
        <Text style={styles.subTitle}>Default speed</Text>
      </View>
      <View style={styles.pickerBox}>
        <Picker
          style={styles.selector}
          selectedValue={selectedPace}
          onValueChange={value => setPace(value)}>
          {paces.map(unit => (
            <Picker.Item value={unit} label={unit} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    backgroundColor: '#f99d82',
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
  },
  pickerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selector: {
    width: '100%',
    backgroundColor: 'white',
  },
});
