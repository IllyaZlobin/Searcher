import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUser } from "../models/user.model";
import { Gender } from "../enums/gender";

@Entity('user')
export class User implements IUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  email: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  surname: string;

  @Column('varchar')
  gender: Gender;

  @Column('int')
  age: number;

  @Column('varchar')
  web: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  token: string;

  @Column('varchar')
  refresh_token: string;

  @Column('int')
  cityId: number;

  @Column('int')
  countryId: number;

}