import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IMovies } from "../../models/db/movies.model";

@Entity('movies')
export class Movies implements IMovies {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('int')
  year: number

  @Column('int')
  runtime: number;

  @Column('int')
  votes: number;

  @Column('longtext')
  title: string;

  @Column('longtext')
  description: string;

  @Column('double')
  rating: number;

  @Column('double')
  revenue: number;

  @Column('int')
  mpaaId: number;

  @Column('int')
  productionId: number;

  @Column('varchar')
  poster: string;
}