import { useCallback, useEffect, useState } from 'react';

export const useAuthActions = () => {
  const [authContextLoaded, setAuthContextLoaded] = useState(false);

  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const checkIfAuthenticated = useCallback(async () => {
    //   if (localStorage.token) {
    //     await api.setAuthToken(localStorage.token);
    //     await getUserData();
    //   }
    setTimeout(() => setAuthContextLoaded(true), 0);
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

  return { authContextLoaded, register, login, logout };
};
