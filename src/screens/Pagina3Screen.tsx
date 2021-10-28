import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/stylesApp';

interface Props extends StackScreenProps<RootStackParams, 'Pagina3Screen'> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3</Text>
      <Button title="Regredar" onPress={() => navigation.pop()} />
      <Button title="Ir pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
