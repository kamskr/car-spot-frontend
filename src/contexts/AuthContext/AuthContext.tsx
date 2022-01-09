import React, { createContext, FC, useContext } from 'react';
import { AuthContextProps } from 'contexts/AuthContext/AuthContext.types';

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext<AuthContextProps>(AuthContext);
