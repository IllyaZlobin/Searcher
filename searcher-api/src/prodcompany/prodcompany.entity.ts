import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movies } from "src/movies/movies.entity";

@Entity('productioncompany')
export class ProdCompany {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  company: string;

  @Column('varchar')
  country: string;

  @Column('varchar')
  headquarters: string;

  @Column('int')
  est: number;

  @Column('varchar')
  notes: string;

  @OneToMany(type => Movies, movies => movies.production)
  movies: Movies[]
}