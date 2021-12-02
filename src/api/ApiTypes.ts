import { ParkingSpot } from 'api/models';

export interface CarSpotAPI {
  // parking-spots
  getParkingSpots(): Promise<ParkingSpot[]>;
}

export interface ApiError {
  content: string;
}

export interface PaginatedData<T = any> {
  total_count: number;
  data: T;
}
