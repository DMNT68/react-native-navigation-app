import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../theme/stylesApp';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text style={{justifyContent: 'space-between'}}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="hammer-outline" />
        <TouchableIcon iconName="close-circle-sharp" />
      </Text>
    </View>
  );
};
