import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IActors } from "../models/actors.model";

@Entity('actors')
export class Actors implements IActors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  list: string;

  @Column('int')
  movieId: number;
}