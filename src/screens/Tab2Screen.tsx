import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect');
  }, []);

  return (
    <View>
      <Text>TabScreen 2</Text>
    </View>
  );
};
