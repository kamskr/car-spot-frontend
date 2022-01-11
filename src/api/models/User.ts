export interface User {
  name: string;
  surname: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  cars: string[];
  parkingSpots: string[];
}
