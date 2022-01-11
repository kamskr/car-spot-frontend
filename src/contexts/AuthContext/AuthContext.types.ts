import { LoginUserDTO, RegisterUserDTO, User } from 'api/models';

export interface AuthenticationState {
  isAuthenticated: boolean;
  user?: User;
}
export interface AuthContextProps {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user?: User;
  login: (userCredentials: LoginUserDTO) => Promise<(dispatch: any) => Promise<void>>;
  register: (userCredentials: RegisterUserDTO) => Promise<(dispatch: any) => Promise<void>>;
  logout: () => Promise<void>;
}
