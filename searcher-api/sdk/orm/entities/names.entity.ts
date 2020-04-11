import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { INames } from "../../models/db/names.model";

@Entity('names')
export class Names implements INames {
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