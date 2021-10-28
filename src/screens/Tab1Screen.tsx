import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles, colores} from '../theme/stylesApp';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text style={{justifyContent: 'space-between',}}>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="aperture-outline" size={80} color={colores.primary} />
        <Icon name="hammer-outline" size={80} color={colores.primary} />
        <Icon name="close-circle-sharp" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
