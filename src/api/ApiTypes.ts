import { ParkingSpot, Token, RegisterUserDTO, LoginUserDTO } from 'api/models';

export interface CarSpotAPI {
  // Authentication
  register(userCredentials: RegisterUserDTO): Promise<Token>;
  login(userCredentials: LoginUserDTO): Promise<Token>;

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
