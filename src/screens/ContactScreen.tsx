import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import {styles, colores} from '../theme/stylesApp';

export const ContactScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>
      {/* {!isLoggedIn && ( */}
        <Button disabled={isLoggedIn} mode="contained" onPress={signIn} color={colores.primary} style={{width: 100, alignSelf: 'center',}}>
          sing in
        </Button>
      {/* )} */}
    </View>
  );
};
