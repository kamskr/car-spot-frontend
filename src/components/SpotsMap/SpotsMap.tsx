/* eslint-disable no-undef */
import React, { CSSProperties, FC, useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer, LoadScript } from '@react-google-maps/api';
import { scroller } from 'react-scroll';
import { ParkingSpot } from 'api/models';
import { useGoogleMapsContext } from 'contexts/GoogleMapsContext';

import { LoadingIndicator } from 'components/LoadingIndicator';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const parkingSpotsTemp: ParkingSpot[] = [
  {
    id: 'qewqeqwrqgeqwge',
    dateStart: new Date(),
    lat: 52.229676,
    lng: 21.012229,
    allowContact: true,
    user: { name: 'Kamil', surname: 'Sikora', username: 'kamilsikora', email: 'kamilsikora@email.te', confirmed: true, blocked: false },
    car: { brand: 'BMW', model: 'XM22', color: 'Black', registrationNumber: 'WWL 6231D' },
  },
  {
    id: 'qewqeqwrqgeasdqwge',
    dateStart: new Date(),
    lat: 62.229676,
    lng: 21.012229,
    allowContact: true,
    user: { name: 'Kamil', surname: 'Sikora', username: 'kamilsikora', email: 'kamilsikora@email.te', confirmed: true, blocked: false },
    car: { brand: 'BMW', model: 'XM22', color: 'Black', registrationNumber: 'WWL 6231D' },
  },
  {
    id: 'qewqeqwrqgasdeqwge',
    dateStart: new Date(),
    lat: 52.229676,
    lng: 31.012229,
    allowContact: true,
    user: { name: 'Kamil', surname: 'Sikora', username: 'kamilsikora', email: 'kamilsikora@email.te', confirmed: true, blocked: false },
    car: { brand: 'BMW', model: 'XM22', color: 'Black', registrationNumber: 'WWL 6231D' },
  },
];

interface Props {
  parkingSpots?: ParkingSpot[];
}

export const SpotsMap = () => {
  const [activeAddress, setActiveAddress] = useState<ParkingSpot | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const parkingSpots = parkingSpotsTemp;
  const { isLoaded } = useGoogleMapsContext();

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    setActiveAddress(null);
  }, [parkingSpots, mapInstance]);

  useEffect(() => {}, [activeAddress]);

  useEffect(() => {}, [mapInstance]);

  if (!isLoaded) {
    return <LoadingIndicator />;
  }

  const center = {
    lat: 52.229676,
    lng: 21.012229,
  };

  return (
    <>
      <p>Map should be here</p>
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
    </>
  );
};
function useLoadScript(arg0: {
  googleMapsApiKey: string; // ,
}): { isLoaded: any; loadError: any } {
  throw new Error('Function not implemented.');
}
