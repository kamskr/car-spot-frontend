import { User } from 'api/models';

export interface AuthenticationState {
  isAuthenticated: boolean;
  user?: User;
}
export interface AuthContextProps {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user?: User;
  login: (username: string, password: string) => Promise<void>;
  register: (code: string) => Promise<void>;
  logout: () => Promise<void>;
}
