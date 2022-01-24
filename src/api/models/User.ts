import { Car, ParkingSpot } from 'api/models';

export interface User {
  id: string;
  name?: string;
  surname?: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  cars: Car[];
  parking_spots: ParkingSpot[];
}
