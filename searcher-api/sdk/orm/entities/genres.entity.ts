import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IGenres } from "../../models/db/genres.model";

@Entity('genres')
export class Genres implements IGenres {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  genre: string;

  @Column('int')
  movieId: number
}