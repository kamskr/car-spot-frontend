import { LoginUserDTO, RegisterUserDTO, User } from 'api/models';

export interface AuthenticationState {
  isAuthenticated: boolean;
  user?: User;
  isLoading: boolean;
}
export interface AuthContextProps {
  isInitialized: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
  login: (userCredentials: LoginUserDTO) => Promise<void>;
  register: (userCredentials: RegisterUserDTO) => Promise<void>;
  logout: () => Promise<void>;
}
