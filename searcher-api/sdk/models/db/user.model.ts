import { Gender } from '../enums/gender';
import { UserRoles } from '../enums';

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  gender: Gender;
  age: number;
  cityId: number;
  countryId: number;
  web: string;
  password: string;
  role: UserRoles;
}
