import { Position } from 'api/models/Position';
import { User, Car } from '.';

export interface ParkingSpot {
  id: string;
  dateStart?: Date;
  dateTo?: Date;
  position: Position;
  allowContact: boolean;
  user: User;
  car: Car;
}
