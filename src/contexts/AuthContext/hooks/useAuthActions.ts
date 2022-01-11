import { api } from 'api';
import { LoginUserDTO, RegisterUserDTO, AuthTokens } from 'api/models';
import { clearAuthTokens, getAuthTokens, isTokenValid, setAuthTokens } from 'contexts/AuthContext/AuthContext.helpers';
import { CLEAR_STATE, SET_USER } from 'contexts/AuthContext/AuthContext.state';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const useAuthActions = (dispatch: Dispatch<SetStateAction<any>>) => {
  const [isInitialized, setIsInitialized] = useState(false);

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
  };

  const checkAuthentication = async () => {
    const { token, refresh } = getAuthTokens();

    if (token && isTokenValid(token)) {
      api.setAuthToken(token);
      dispatch(getUserData());
    } else if (refresh && isTokenValid(refresh)) {
      const data = await api.refreshToken(refresh);
      dispatch(finalizeLogin(data));
    }
    setTimeout(() => setIsInitialized(true), 0);
  };

  const finalizeLogin = async (authTokens: AuthTokens) => {
    setAuthTokens(authTokens);
    await getUserData();
  };

  const performLoginAction = async (performLogin: () => Promise<AuthTokens>) => {
    const response = await performLogin();

    if (response.token) {
      const data = response as AuthTokens;
      await dispatch(finalizeLogin(data));
    }
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
    checkAuthentication();
  }, []);

  return { isInitialized, register, login, logout, checkAuthentication };
};
