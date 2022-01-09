import React, { createContext, FC, useContext } from 'react';
import { AuthContextProps } from 'contexts/AuthContext/AuthContext.types';
import { useAuthActions } from 'contexts/AuthContext/hooks';

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  const { authContextLoaded, register, login, logout } = useAuthActions();
  return <AuthContext.Provider value={{ authContextLoaded, register, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext<AuthContextProps>(AuthContext);
