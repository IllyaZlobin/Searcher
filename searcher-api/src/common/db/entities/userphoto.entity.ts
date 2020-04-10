import { IUserPhoto } from "../models/userphoto.model";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('userphoto')
export class UserPhoto implements IUserPhoto {
  @PrimaryGeneratedColumn()  
  id: number;

  @Column('longblob')
  photo: string;

  @Column('int')
  userId: number;
}