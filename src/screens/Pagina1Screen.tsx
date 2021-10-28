import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles, colores} from '../theme/stylesApp';

import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<RootStackParams, 'Pagina1Screen'> {}
interface Props extends DrawerScreenProps<RootStackParams, 'Pagina1Screen'> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="menu-outline"
            size={35}
            color={colores.primary}
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Icon name="man-outline" size={40} color="#fff" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Icon name="woman-outline" size={40} color="#fff" />
          <Text style={styles.botonGrandeTexto}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
