import { useState } from 'react';
import { ApiError } from 'api/ApiTypes';

export interface ApiRequest {
  errors?: ApiError;
  isLoading: boolean;
  isCompleted: boolean;
  dispatch: <T = any>(promise: Promise<T>) => Promise<T>;
}

/**
 * A hook that wraps an API promise to get a basic information about the request.
 */
const useApiRequest = (): ApiRequest => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState<ApiError | undefined>();

  const dispatch = <T = any>(promise: Promise<T>): Promise<T> => {
    setErrors(undefined);
    setIsCompleted(false);
    setIsLoading(true);

    promise
      .then(() => {
        setIsCompleted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        try {
          console.error(error);
          setErrors(error.response.data);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
        setIsLoading(false);
      });

    return promise;
  };

  return {
    errors,
    isLoading,
    isCompleted,
    dispatch,
  };
};

export default useApiRequest;
