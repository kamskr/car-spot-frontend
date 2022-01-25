import { ParkingSpot } from 'api/models';

export interface ParkingSpotsState {
  reloadParkingSpots: () => void;
  isLoading: boolean;
  parkingSpots: ParkingSpot[] | null;
}
