import { ParkingSpot, AuthTokens, RegisterUserDTO, LoginUserDTO, User, ParkingSpotDTO, UserDTO } from 'api/models';

export interface CarSpotAPI {
  // Authentication
  getUser(): Promise<User>;
  register(userCredentials: RegisterUserDTO): Promise<AuthTokens>;
  login(userCredentials: LoginUserDTO): Promise<AuthTokens>;
  updateUser(id: string, data: UserDTO): Promise<void>;

  // parking-spots
  getParkingSpots(): Promise<ParkingSpot[]>;
  createParkingSpot(data: ParkingSpotDTO): Promise<ParkingSpot>;
  updateParkingSpot(id: string, data: ParkingSpotDTO): Promise<ParkingSpot>;
}

export interface ApiError {
  content: string;
}

export interface PaginatedData<T = any> {
  total_count: number;
  data: T;
}
