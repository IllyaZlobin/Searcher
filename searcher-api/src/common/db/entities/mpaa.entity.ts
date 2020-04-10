import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IMpaa } from "../models/mpaa.model";

@Entity('mpaarating')
export class MpaaRating implements IMpaa {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('longtext')
  title: string;

  @Column('longtext')
  description: string;
  
}