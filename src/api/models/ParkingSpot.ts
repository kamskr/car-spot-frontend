import { User, Car } from '.';

export interface ParkingSpot {
  id: string;
  dateStart: Date;
  dateEnd?: Date;
  lat: number;
  lng: number;
  allowContact: boolean;
  user: User;
  car: Car;
}
