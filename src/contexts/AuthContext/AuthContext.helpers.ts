import jwt_decode from 'jwt-decode';
import { getStorageItem, removeStorageItem, setStorageItem } from 'helpers';
import { AuthTokens } from 'api/models';
import { api } from 'api';

const tokenStorageKey = 'auth/access-token';
const refreshStorageKey = 'auth/refresh-token';

export const clearAuthTokens = () => {
  removeStorageItem(tokenStorageKey);
  api.clearAuthToken();
};

export const setAuthTokens = (token: string) => {
  setStorageItem(tokenStorageKey, token);
  api.setAuthToken(token);
};

export const getAuthTokens = () => {
  const token = getStorageItem(tokenStorageKey);
  const refresh = getStorageItem(refreshStorageKey);

  return { token, refresh };
};

export const isTokenValid = (token: string) => {
  try {
    const decodedAccess = jwt_decode<{ exp: number }>(token);
    return decodedAccess.exp * 1000 >= Date.now();
  } catch {
    return false;
  }
};
