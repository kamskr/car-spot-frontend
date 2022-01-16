/* eslint-disable no-undef */
import React, { CSSProperties, useEffect, useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer } from '@react-google-maps/api';
import { ParkingSpot, Position } from 'api/models';
import { useGoogleMapsContext } from 'contexts/GoogleMapsContext';

import { LoadingIndicator } from 'components/LoadingIndicator';
import { useParkingSpots } from 'features/SearchSpots/context/ParkingSpots.context';
import { useUser } from 'contexts';
import { AddSpot } from './components/AddSpot';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const center = {
  lat: 52.229676,
  lng: 21.012229,
};

export const SpotsMap = () => {
  const [activeAddress, setActiveAddress] = useState<ParkingSpot | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [addingSpotPosition, setAddingSpotPosition] = useState<Position | null>(null);
  const { parkingSpots, isLoading } = useParkingSpots();
  const user = useUser();
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

  const handleMapClick = (e: any) => {
    const { latLng } = e;

    const position = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };
    setAddingSpotPosition(position);
  };

  if (!isLoaded || isLoading || !user) {
    return <LoadingIndicator />;
  }

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
        onClick={handleMapClick}
      >
        {!!parkingSpots?.length && (
          <MarkerClusterer>
            {(clusterer) =>
              parkingSpots.map((spot) => {
                const now = new Date();
                const spotBusy = spot.dateStart && spot.dateTo && spot.dateStart < now && spot.dateTo > now;

                const spotMine = spotBusy && spot.user?.id === user?.id;

                const carIcon = spotMine
                  ? {
                      url: 'https://www.nicepng.com/png/full/253-2534170_clip-art-at-clker-com-vector-online-green.png',
                      scaledSize: new google.maps.Size(24, 24),
                    }
                  : {
                      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Electric_car_icon.png/912px-Electric_car_icon.png',
                      scaledSize: new google.maps.Size(24, 24),
                    };

                const icon = spotBusy
                  ? carIcon
                  : {
                      url: 'http://cdn.onlinewebfonts.com/svg/img_349568.png',
                      scaledSize: new google.maps.Size(24, 34),
                    };

                return (
                  <Marker
                    key={spot.id}
                    position={{
                      lat: spot.position.lat,
                      lng: spot.position.lng,
                    }}
                    clusterer={clusterer}
                    icon={icon}
                    onClick={() => {
                      setActiveAddress(spot);
                    }}
                  />
                );
              })
            }
          </MarkerClusterer>
        )}
        {/* {activeAddress && <HcpPopupCard address={activeAddress} params={params} onClose={() => setActiveAddress(null)} />} */}
        <AddSpot open={!!addingSpotPosition} handleClose={() => setAddingSpotPosition(null)} />
      </GoogleMap>
    </>
  );
};
function useLoadScript(arg0: {
  googleMapsApiKey: string; // ,
}): { isLoaded: any; loadError: any } {
  throw new Error('Function not implemented.');
}
