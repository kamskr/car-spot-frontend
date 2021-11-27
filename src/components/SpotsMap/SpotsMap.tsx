import React, { CSSProperties, FC, useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer, LoadScript } from '@react-google-maps/api';
import { scroller } from 'react-scroll';
import { ParkingSpot } from 'api/models';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

interface Props {
  parkingSpots?: ParkingSpot[];
}

export const SpotsMap = ({ parkingSpots }: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '', // ,
    // ...otherOptions
  });
  const [activeAddress, setActiveAddress] = useState<ParkingSpot | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map>(null);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    setActiveAddress(null);
  }, [parkingSpots, mapInstance]);

  // const locations = useMemo(() => addresses.map((address) => address.location), [addresses]);

  return (
    <GoogleMap
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        rotateControl: false,
        mapTypeControl: true,
        panControl: false,
      }}
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
                    lat: spot.lat,
                    lng: spot.lng,
                  }}
                  clusterer={clusterer}
                  onClick={() => {
                    setActiveAddress(spot);

                    scroller.scrollTo(spot.id, {
                      smooth: true,
                      containerId: 'parking-spot',
                      offset: -10,
                      duration: 220,
                    });
                  }}
                />
              );
            })
          }
        </MarkerClusterer>
      )}
      {/* {activeAddress && <HcpPopupCard address={activeAddress} params={params} onClose={() => setActiveAddress(null)} />} */}
    </GoogleMap>
  );
};
function useLoadScript(arg0: {
  googleMapsApiKey: string; // ,
}): { isLoaded: any; loadError: any } {
  throw new Error('Function not implemented.');
}
