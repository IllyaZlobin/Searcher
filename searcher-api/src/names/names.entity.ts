import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('names')
export class Names {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  imdb_id: string;

  @Column('varchar')
  primaryName: string;

  @Column('int')
  birthYear: number;

  @Column('varchar')
  deathYear: string;

  @Column('varchar')
  profession
}