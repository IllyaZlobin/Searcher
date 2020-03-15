import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";

@Entity('directors')
export class Directors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  name: string;

  @ManyToOne(type => Movies, movies => movies.directors)
  movie: Movies;
}