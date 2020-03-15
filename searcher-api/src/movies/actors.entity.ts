import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";

@Entity('actors')
export class Actors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  list: string;

  @ManyToOne(type => Movies, movies => movies.actors)
  movie: Movies;
}