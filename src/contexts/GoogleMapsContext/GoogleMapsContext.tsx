import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

// https://developers.google.com/maps/documentation/javascript/reference/geocoder

interface GoogleMapsContextType {
  isLoaded: boolean;
  geocode: google.maps.Geocoder['geocode'];
  defaultBounds: google.maps.LatLngBounds;
  country: string;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>(undefined);

const LIBRARIES = ['places'] as Libraries;

export const GoogleMapsProvider = ({ children }) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    region: country,
    libraries: LIBRARIES,
  });

  const defaultBounds = useMemo<google.maps.LatLngBounds | null>(() => {
    const ne = defaultViewport?.northeast;
    const sw = defaultViewport?.southwest;

    if (!isLoaded) {
      return null;
    }

    if (!ne || !sw) {
      return new google.maps.LatLngBounds();
    }

    return new google.maps.LatLngBounds(new google.maps.LatLng(sw.lat, sw.lng), new google.maps.LatLng(ne.lat, ne.lng));
  }, [isLoaded, defaultViewport]);

  const geocode = useCallback<google.maps.Geocoder['geocode'] | null>(
    (request, callback) => {
      if (!isLoaded) {
        return null;
      }

      return new google.maps.Geocoder().geocode(
        {
          ...request,
          componentRestrictions: {
            ...request.componentRestrictions,
            // country: country,
          },
        },
        callback,
      );
    },
    [isLoaded],
  );

  return <GoogleMapsContext.Provider value={{ isLoaded, geocode, defaultBounds, country }}>{children}</GoogleMapsContext.Provider>;
};

export const useGoogleMapsContext = () => useContext(GoogleMapsContext);
