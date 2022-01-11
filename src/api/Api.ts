import { ParkingSpot, RegisterUserDTO, AuthTokens, User } from 'api/models';
import { LoginUserDTO } from 'api/models/dtos/auth/User';
import { ApiRoutes } from './ApiRoutes';
import { CarSpotAPI, PaginatedData } from './ApiTypes';
import { HttpClient } from './HttpClient';

export class Api implements CarSpotAPI {
  client: HttpClient;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || '');
  }

  setAuthToken(token: string): void {
    this.client.setCommonHeader('Authorization', token);
  }

  clearAuthToken(): void {
    this.client.deleteCommonHeader('Authorization');
  }

  async refreshToken(refresh: string): Promise<AuthTokens> {
    const res = await this.client.post(ApiRoutes.refreshTokenRoute, { refresh });
    return res.data;
  }

  async getUser(): Promise<User> {
    const res = await this.client.get(ApiRoutes.userProfileRoute);
    return res.data;
  }

  async register(userCredentials: RegisterUserDTO): Promise<AuthTokens> {
    const response = await this.client.post(ApiRoutes.registerRoute, userCredentials);

    return response.data.jwt;
  }

  async login(userCredentials: LoginUserDTO): Promise<AuthTokens> {
    const response = await this.client.post('https://localhost:1337/api/auth/local', userCredentials);

    return response.data.jwt;
  }

  async getParkingSpots(): Promise<ParkingSpot[]> {
    const res = await this.client.get(ApiRoutes.parkingSpotsRoute);
    return res.data;
  }
}
