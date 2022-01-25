import { ParkingSpot, RegisterUserDTO, LoginUserDTO, AuthTokens, User, ParkingSpotDTO, UserDTO, Car } from 'api/models';
import { ApiRoutes } from './ApiRoutes';
import { CarSpotAPI, PaginatedData } from './ApiTypes';
import { HttpClient } from './HttpClient';

export class Api implements CarSpotAPI {
  client: HttpClient;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || '');
  }

  setAuthToken(token: string): void {
    this.client.setCommonHeader('Authorization', `Bearer ${token}`);
  }

  clearAuthToken(): void {
    this.client.deleteCommonHeader('Authorization');
  }

  async refreshToken(refresh: string): Promise<AuthTokens> {
    const res = await this.client.post(ApiRoutes.refreshTokenRoute, { refresh });
    return res.data;
  }

  async getUser(): Promise<User> {
    const resMe = await this.client.get(ApiRoutes.userProfileRoute);
    const res = await this.client.get(ApiRoutes.usersIdRoute(resMe.data.id));

    return {
      ...res.data,
      parking_spots: res.data.parking_spots.map((spot: any) => ({
        ...spot,
        createdAt: new Date(spot.createdAt),
        dateStart: new Date(spot.dateStart),
        dateTo: new Date(spot.dateTo),
      })),
    };
  }

  async updateUser(id: string, data: UserDTO): Promise<void> {
    const res = await this.client.put(ApiRoutes.usersIdRoute(id), data);
  }

  async register(userCredentials: RegisterUserDTO): Promise<any> {
    const response = await this.client.post(ApiRoutes.registerRoute, userCredentials);

    return response.data.jwt;
  }

  async login(userCredentials: LoginUserDTO): Promise<any> {
    const response = await this.client.post(ApiRoutes.loginRoute, userCredentials);

    return response.data.jwt;
  }

  async getParkingSpots(): Promise<ParkingSpot[]> {
    const res = await this.client.get(ApiRoutes.parkingSpotsRoute);

    const parkingSpots = res.data;

    if (parkingSpots.length) {
      return parkingSpots.map((spot: any) => ({
        ...spot,
        createdAt: new Date(spot.createdAt),
        dateStart: new Date(spot.dateStart),
        dateTo: new Date(spot.dateTo),
      }));
    }
    return res.data;
  }

  async createParkingSpot(data: ParkingSpotDTO): Promise<ParkingSpot> {
    const res = await this.client.post(ApiRoutes.parkingSpotsRoute, data);

    return res.data;
  }

  async updateParkingSpot(id: string, data: ParkingSpotDTO): Promise<ParkingSpot> {
    const res = await this.client.put(ApiRoutes.parkingSpotsIdRoute(id), data);
    return res.data;
  }

  async createCar(car: Car): Promise<Car> {
    const res = await this.client.post(ApiRoutes.carsRoute, car);
    return res.data;
  }

  async updateCar(id: string, car: Car): Promise<Car> {
    const res = await this.client.put(ApiRoutes.carsIdRoute(id), car);
    return res.data;
  }

  async deleteCar(id: string): Promise<void> {
    const res = await this.client.delete(ApiRoutes.carsIdRoute(id));
  }
}
