import { UserRoles, IUser, Gender } from 'sdk';

export class UserDTO implements IUser {
  id: number;
  email: string;
  name: string;
  surname?: string;
  gender: Gender;
  age: number;
  cityId?: number;
  countryId?: number;
  web?: string;
  password: string;
  role: UserRoles = UserRoles.User;
}
