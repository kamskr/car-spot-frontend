export class ApiRoutes {
  // Authentication
  static userProfileRoute = '/users/me';

  static registerRoute = '/auth/local/register';

  static loginRoute = '/auth/local';

  static refreshTokenRoute = 'auth/refreshToken';

  // parking-spots
  static parkingSpotsRoute = '/parking-spots';

  static parkingSpotsIdRoute = (id: string) => `/parking-spots/${id}`;

  // cars
  static carsRoute = '/cars';

  static carsIdRoute = (id: string) => `/cars/${id}`;

  // users
  static usersRoute = '/users';

  static usersIdRoute = (id: string) => `/users/${id}`;
}
