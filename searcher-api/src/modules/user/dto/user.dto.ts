import { UserRoles, IUser, Gender } from 'sdk';

export class UserDTO implements IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  gender: Gender;
  age: number;
  role: UserRoles;
  cityId: number;
  countryId: number;
  web: string;
}
