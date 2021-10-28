import React, { useEffect } from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3Screen effect');
  }, []);

  return (
    <View>
      <Text>TabScreem 3</Text>
    </View>
  );
};
