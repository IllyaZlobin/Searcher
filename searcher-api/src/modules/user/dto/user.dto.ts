import { Gender } from 'sdk/models/enums/gender';
import { IUser } from '../../../../sdk/models/db/user.model';

export class UserDTO implements IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  token: string;
  refresh_token: string;
  gender: Gender;
  age: number;
  cityId: number;
  countryId: number;
  web: string;
}
