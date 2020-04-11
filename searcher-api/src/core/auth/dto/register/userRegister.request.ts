import { Gender } from 'sdk/models/enums/gender';

export class UserRegisterRequest {
  email: string;
  password: string;
  name: string;
  surname?: string;
  gender: Gender;
  age: number;
  photo?: number;
  city?: number;
  country?: number;
  web?: string;
}
