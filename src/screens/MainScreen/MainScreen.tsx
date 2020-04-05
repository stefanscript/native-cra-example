import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../../../App';
import paces, {paceInSecondsToMMss, timeForDistance} from '../../paces';
import distances from '../../distances';

interface Props {
  navigation: StackNavigationProp<RootStack, 'MainScreen'>;
}

const MainScreen = ({navigation}: Props) => {
  const handlePressSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  const [selectedPace, setPace] = useState(120);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.pickerArea}>
          <View style={styles.pickerBox}>
            <Picker
              style={styles.selector}
              selectedValue={selectedPace}
              onValueChange={value => setPace(value)}>
              {paces.map(paceInSeconds => (
                <Picker.Item
                  key={paceInSeconds}
                  value={paceInSeconds}
                  label={paceInSecondsToMMss(paceInSeconds)}
                />
              ))}
            </Picker>
            <Text style={styles.selectorText}>min/km</Text>
          </View>
        </View>
        <View style={styles.distanceArea}>
          <View style={styles.distanceBoxes}>
            {distances.map(distance => {
              return (
                <View style={styles.distanceBox}>
                  <Text style={styles.distance}>{distance}k</Text>
                  <Text style={styles.distanceTime}>
                    {timeForDistance(distance, selectedPace)}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <TouchableOpacity onPress={handlePressSettings}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerArea: {
    height: 250,
    width: '100%',
    backgroundColor: 'powderblue',
  },
  pickerBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  selector: {
    width: '100%',
    backgroundColor: 'white',
  },
  selectorText: {
    width: '100%',
    textAlign: 'center',
  },
  distanceArea: {
    height: 250,
    width: '100%',
    backgroundColor: 'transparent',
  },
  distanceBoxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceBoxWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceBox: {
    height: 30,
    width: '100%',
    marginBottom: 5,
    backgroundColor: 'orange',
  },
  distance: {
    fontSize: 19,
    width: '50%',
  },
  distanceTime: {
    fontSize: 19,
    width: '50%',
    textAlign: 'right',
  },
});
