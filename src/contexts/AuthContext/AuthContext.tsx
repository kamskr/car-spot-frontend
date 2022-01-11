import React, { createContext, FC, useContext, useReducer } from 'react';
import { AuthContextProps } from 'contexts/AuthContext/AuthContext.types';
import { useAuthActions } from 'contexts/AuthContext/hooks';
import { authReducer, initialState } from 'contexts/AuthContext/AuthContext.state';

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const { isInitialized, register, login, logout } = useAuthActions(dispatch);

  return (
    <AuthContext.Provider
      value={{
        isInitialized,
        isAuthenticated: authState.isAuthenticated,
        isLoading: authState.isLoading,
        user: authState.user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextProps>(AuthContext);

export const useUser = () => useContext<AuthContextProps>(AuthContext).user;
