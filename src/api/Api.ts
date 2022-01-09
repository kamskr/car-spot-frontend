import { ParkingSpot, RegisterUserDTO, Token } from 'api/models';
import { LoginUserDTO } from 'api/models/dtos/auth/User';
import { ApiRoutes } from './ApiRoutes';
import { CarSpotAPI, PaginatedData } from './ApiTypes';
import { HttpClient } from './HttpClient';

export class Api implements CarSpotAPI {
  client: HttpClient;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || '');
  }

  async register(userCredentials: RegisterUserDTO): Promise<Token> {
    const response = await this.client.post(ApiRoutes.register, userCredentials);

    return response.data.jwt;
  }

  async login(userCredentials: LoginUserDTO): Promise<Token> {
    const response = await this.client.post(ApiRoutes.login, userCredentials);

    return response.data.jwt;
  }

  async getParkingSpots(): Promise<ParkingSpot[]> {
    const res = await this.client.get(ApiRoutes.parkingSpotsRoute);
    return res.data;
  }
}
