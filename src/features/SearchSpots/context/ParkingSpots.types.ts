import { ParkingSpot } from 'api/models';

export interface ParkingSpotsState {
  isLoading: boolean;
  parkingSpots: ParkingSpot[] | null;
}
