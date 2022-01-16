import { api } from 'api';
import { ParkingSpot } from 'api/models';
import useApiRequest from 'hooks/useApiRequest';
import { useEffect, useState } from 'react';

export const useParkingSpotsActions = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[] | null>(null);

  const request = useApiRequest();

  const fetchParkingSpots = async () => {
    const parkingSpotsFetched = await request.dispatch(api.getParkingSpots());
    setParkingSpots(parkingSpotsFetched);
  };

  useEffect(() => {
    fetchParkingSpots();
  }, []);

  return { parkingSpots };
};
