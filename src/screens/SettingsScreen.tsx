import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {styles, colores} from '../theme/stylesApp';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>Setting screens</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favariteIcon && (
        <Icon
          name={authState.favariteIcon}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
};
