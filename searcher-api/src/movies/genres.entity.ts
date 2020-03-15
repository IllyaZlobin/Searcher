import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";

@Entity('genres')
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  genre: string;

  @ManyToOne(type => Movies, movies => movies.genres)
  movie: Movies
}