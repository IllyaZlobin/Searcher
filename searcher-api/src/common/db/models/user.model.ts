import { Gender } from "../enums/gender";

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
  token: string;
  refresh_token: string;  
}