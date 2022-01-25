import { Car, ParkingSpot } from 'api/models';

export interface User {
  id: string;
  name?: string;
  surname?: string;
  username: string;
  phone?: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  cars: Car[];
  parking_spots: ParkingSpot[];
}
