import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../../../App';

interface Props {
  navigation: StackNavigationProp<RootStack, 'MainScreen'>;
}

const MainScreen = ({navigation}: Props) => {
  const handlePressSettings = () => {
    navigation.navigate('SettingsScreen');
  };
  return (
    <View>
      <Text>Main Screen</Text>

      <TouchableOpacity onPress={handlePressSettings}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
