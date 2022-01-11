export interface User {
  id: string;
  name?: string;
  surname?: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  cars: string[];
  parking_spots: string[];
}
