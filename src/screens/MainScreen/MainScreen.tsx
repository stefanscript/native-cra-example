import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../../../App';

interface Props {
  navigation: StackNavigationProp<RootStack, 'MainScreen'>;
}

const MainScreen = ({navigation}: Props) => {
  const handlePress = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <Text>Main Screen</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
