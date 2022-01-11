import { api } from 'api';
import { LoginUserDTO, RegisterUserDTO, AuthTokens } from 'api/models';
import { clearAuthTokens, getAuthTokens, isTokenValid, setAuthTokens } from 'contexts/AuthContext/AuthContext.helpers';
import { CLEAR_STATE, SET_IS_LOADING, SET_USER } from 'contexts/AuthContext/AuthContext.state';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useAuthActions = (dispatch: Dispatch<SetStateAction<any>>) => {
  const [isInitialized, setIsInitialized] = useState(false);
  console.log('test');
  const getUserData = async () => {
    try {
      const userProfile = await api.getUser();
      if (userProfile) {
        dispatch({
          type: SET_USER,
          payload: userProfile,
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      logout();
    }
    dispatch({
      type: SET_IS_LOADING,
      payload: false,
    });
  };

  const checkAuthentication = async () => {
    console.log('hello');
    const { token } = getAuthTokens();

    if (token && isTokenValid(token)) {
      api.setAuthToken(token);
      await dispatch(getUserData());
      setIsInitialized(true);
    } else {
      setIsInitialized(true);
    }
  };

  const finalizeLogin = async (token: string) => {
    setAuthTokens(token);
    await getUserData();
  };

  const performLoginAction = async (performLogin: () => Promise<string>) => {
    try {
      dispatch({
        type: SET_IS_LOADING,
        payload: true,
      });
      const token = await performLogin();

      if (token) {
        await finalizeLogin(token);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    dispatch({
      type: SET_IS_LOADING,
      payload: false,
    });
  };

  const register = async (userCredentials: RegisterUserDTO): Promise<void> => {
    await performLoginAction(() => api.register(userCredentials));
  };

  const login = async (userCredentials: LoginUserDTO): Promise<void> => {
    await performLoginAction(() => api.login(userCredentials));
  };
  const logout = async (): Promise<void> => {
    clearAuthTokens();
    dispatch({ type: CLEAR_STATE });
  };

  useEffect(() => {
    console.log('init');
    checkAuthentication();
  }, []);

  return { isInitialized, register, login, logout, checkAuthentication };
};
