import { api } from 'api';
import { LoginUserDTO, RegisterUserDTO, AuthTokens } from 'api/models';
import { clearAuthTokens, getAuthTokens, isTokenValid, setAuthTokens } from 'contexts/AuthContext/AuthContext.helpers';
import { CLEAR_STATE, SET_USER } from 'contexts/AuthContext/AuthContext.state';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const useAuthActions = (dispatch: Dispatch<SetStateAction<any>>) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const checkAuthentication = useCallback(async () => {
    const { token, refresh } = getAuthTokens();

    if (token && isTokenValid(token)) {
      api.setAuthToken(token);
      dispatch(getUserData());
    } else if (refresh && isTokenValid(refresh)) {
      const data = await api.refreshToken(refresh);
      dispatch(finalizeLogin(data));
    }
    setTimeout(() => setIsInitialized(true), 0);
  }, []);

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

  const finalizeLogin = useCallback(async (authTokens: AuthTokens) => {
    setAuthTokens(authTokens);
    await getUserData();
  }, []);

  const createLoginAction = useCallback((performLogin: () => Promise<AuthTokens>) => {
    return async (dispatch: any): Promise<void> => {
      const response = await performLogin();

      if (response.token) {
        const data = response as AuthTokens;
        await dispatch(finalizeLogin(data));
      }
    };
  }, []);

  const register = useCallback(async (userCredentials: RegisterUserDTO): Promise<(dispatch: any) => Promise<void>> => {
    return createLoginAction(() => api.register(userCredentials));
  }, []);

  const login = useCallback(async (userCredentials: LoginUserDTO): Promise<(dispatch: any) => Promise<void>> => {
    return createLoginAction(() => api.login(userCredentials));
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    clearAuthTokens();
    dispatch({ type: CLEAR_STATE });
  }, []);

  useEffect(() => {
    checkAuthentication();
  }, []);

  return { isInitialized, register, login, logout, checkAuthentication };
};
