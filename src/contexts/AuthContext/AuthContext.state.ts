import { AuthenticationState } from 'contexts/AuthContext/AuthContext.types';

/**
 * User reducer const.
 */
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
export const SET_USER = 'SET_USER';
export const LOADING_USER = 'LOADING_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ACTIVATE_METHOD = 'ACTIVATE_METHOD';
export const CONFIRM_METHOD = 'CONFIRM_METHOD';
export const SET_BACKUP_CODES = 'SET_BACKUP_CODES';
export const WAIT_FOR_CONFIRMATION = 'WAIT_FOR_CONFIRMATION';
export const CLEAR_CODES = 'CLEAR_CODES';
export const CLEAR_STATE = 'CLEAR_STATE';
export const GET_MFA_CODE = 'GET_MFA_CODE';

/**
 * Initial state of the Authentication context.
 */
export const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined,
};

export const authReducer = (state = initialState, action: any): AuthenticationState => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
