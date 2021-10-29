//  Definir como luce que informacion tendra aquí

import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favariteIcon?: string;
}

// Estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favariteIcon: undefined,
};

//  Lo usaremos para decirle a react cómo luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (iconName: string) => void;
}

//  Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//  Componente ptroveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({type: 'signIn'});

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => dispatch({type: 'logout'});

  const changeUserName = (userName: string) =>
    dispatch({type: 'changeUserName', payload: userName});

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
