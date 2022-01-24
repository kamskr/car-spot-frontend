export interface RegisterUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  identifier: string;
  password: string;
}
export interface UserDTO {
  name?: string;
  surname?: string;
  username: string;
  email: string;
}
