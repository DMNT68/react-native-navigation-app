import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import { styles, colores } from '../theme/stylesApp';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState:{isLoggedIn}, logout} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      <Button disabled={!isLoggedIn} onPress={logout} color={colores.primary} style={{width: 100, alignSelf: 'center',}}>logout</Button>
    </View>
  );
};
