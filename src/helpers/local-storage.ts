export const setStorageItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};
