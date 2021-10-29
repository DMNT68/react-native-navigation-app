import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'logout'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favariteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        favariteIcon: undefined,
        userName: undefined,
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
