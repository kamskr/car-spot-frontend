import React, { ReactNode } from 'react';
import { useAuth, useGoogleMapsContext } from 'contexts';
import { LoadingPage } from 'features/LoadingPage';

interface Props {
  children: ReactNode;
}

export const Bootstrap = ({ children }: Props) => {
  const { isLoaded: isGoogleMapsLoaded } = useGoogleMapsContext();
  const { isInitialized: isAuthenticationLoaded } = useAuth();

  if (!(isGoogleMapsLoaded && isAuthenticationLoaded)) {
    return <LoadingPage />;
  }

  return <>{children}</>;
};
