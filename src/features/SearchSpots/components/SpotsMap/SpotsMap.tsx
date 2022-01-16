/* eslint-disable no-undef */
import React, { CSSProperties, FC, useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer, LoadScript } from '@react-google-maps/api';
import { scroller } from 'react-scroll';
import { ParkingSpot } from 'api/models';
import { useGoogleMapsContext } from 'contexts/GoogleMapsContext';
import { api } from 'api';
import useApiRequest from 'hooks/useApiRequest';

import { LoadingIndicator } from 'components/LoadingIndicator';
import { useParkingSpots } from 'features/SearchSpots/context/ParkingSpots.context';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

export const SpotsMap = () => {
  const { parkingSpots, isLoading } = useParkingSpots();

  const [activeAddress, setActiveAddress] = useState<ParkingSpot | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useGoogleMapsContext();

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    setActiveAddress(null);
  }, [parkingSpots, mapInstance]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(activeAddress);
  }, [activeAddress]);

  if (!isLoaded || isLoading) {
    return <LoadingIndicator />;
  }

  const center = {
    lat: 52.229676,
    lng: 21.012229,
  };

  return (
    <>
      <GoogleMap
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          rotateControl: false,
          mapTypeControl: true,
          panControl: false,
        }}
        center={center}
        zoom={10}
        onLoad={(map) => setMapInstance(map)}
        mapContainerStyle={mapContainerStyle}
      >
        {!!parkingSpots?.length && (
          <MarkerClusterer>
            {(clusterer) =>
              parkingSpots.map((spot) => {
                return (
                  <Marker
                    key={spot.id}
                    position={{
                      lat: spot.position.lat,
                      lng: spot.position.lng,
                    }}
                    clusterer={clusterer}
                    onClick={() => {
                      setActiveAddress(spot);

                      // scroller.scrollTo(spot.id, {
                      //   smooth: true,
                      //   containerId: 'parking-spot',
                      //   offset: -10,
                      //   duration: 220,
                      // });
                    }}
                  />
                );
              })
            }
          </MarkerClusterer>
        )}
        {/* {activeAddress && <HcpPopupCard address={activeAddress} params={params} onClose={() => setActiveAddress(null)} />} */}
      </GoogleMap>
    </>
  );
};
function useLoadScript(arg0: {
  googleMapsApiKey: string; // ,
}): { isLoaded: any; loadError: any } {
  throw new Error('Function not implemented.');
}
