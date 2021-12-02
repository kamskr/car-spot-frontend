import React, { createContext, useContext, useCallback, useMemo, ReactNode } from 'react';
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api';

// https://developers.google.com/maps/documentation/javascript/reference/geocoder

interface GoogleMapsContextType {
  isLoaded: boolean;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({ isLoaded: false });

interface Props {
  children: ReactNode;
}

export const GoogleMapsProvider = ({ children }: Props) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY || '';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
  });

  return <GoogleMapsContext.Provider value={{ isLoaded }}>{children}</GoogleMapsContext.Provider>;
};

export const useGoogleMapsContext = () => useContext(GoogleMapsContext);
