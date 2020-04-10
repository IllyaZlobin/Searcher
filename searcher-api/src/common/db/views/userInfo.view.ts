import { IUserInfoVw } from "../models/userInfoVw.model";
import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity('user_info_vw')
export class UserInfoVw implements IUserInfoVw {
  @ViewColumn()  
  id: number;

  @ViewColumn()  
  email: string;

  @ViewColumn()  
  name: string;

  @ViewColumn()  
  surname: string;

  @ViewColumn()  
  gender: string;

  @ViewColumn()  
  age: number;

  @ViewColumn()  
  web: string;

  @ViewColumn()  
  password: string;

  @ViewColumn()  
  token: string;

  @ViewColumn()  
  city: string;

  @ViewColumn()  
  country: string;   
}