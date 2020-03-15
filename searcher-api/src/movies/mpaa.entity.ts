import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movies } from "./movies.entity";

@Entity('mpaarating')
export class MpaaRating {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('longtext')
  title: string;

  @Column('longtext')
  description: string;

  @OneToMany(type => Movies, movies => movies.mpaa)
  movies: Movies[]
}