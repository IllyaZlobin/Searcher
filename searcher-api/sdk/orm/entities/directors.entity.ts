import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IDirectors } from "../../models/db/directors.model";

@Entity('directors')
export class Directors implements IDirectors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  name: string;

  @Column('int')
  movieId: number;
}