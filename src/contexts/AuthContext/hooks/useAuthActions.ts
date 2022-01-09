import { api } from 'api';
import { useCallback, useEffect, useState } from 'react';

export const useAuthActions = () => {
  const [authContextLoaded, setAuthContextLoaded] = useState(false);

  const checkIfAuthenticated = useCallback(async () => {
    //   if (localStorage.token) {
    //     await api.setAuthToken(localStorage.token);
    //     await getUserData();
    //   }
    setTimeout(() => setAuthContextLoaded(true), 0);
  }, []);

  const getUserData = async () => {
    try {
      const userProfile = await api.getUserProfile();
      // if (userProfile) {
      //   userDispatch({
      //     type: SET_USER,
      //     payload: userProfile,
      //   });
      //   userDispatch({ type: SET_AUTHENTICATED });
      // }
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  const finalizeLogin = useCallback((token: string) => {
    const tokenString = `Bearer ${token}`;
    localStorage.setItem('token', tokenString);
    api.setAuthToken(tokenString);
    getUserData();

    // dispatch(getAppointments());
  }, []);

  const register = useCallback(async (): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(register);
  }, []);

  const login = useCallback(async (): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(login);
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(logout);
  }, []);

  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  return { authContextLoaded, register, login, logout };
};
