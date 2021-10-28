import {useNavigation} from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen' as never)}
      />
    </View>
  );
};
