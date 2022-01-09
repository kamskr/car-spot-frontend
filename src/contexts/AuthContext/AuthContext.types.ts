export interface AuthContextProps {
  authContextLoaded: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (code: string) => Promise<void>;
  logout: () => Promise<void>;
}
