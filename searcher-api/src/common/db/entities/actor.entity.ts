import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { IActor } from "../models/actor.model";

@Entity('actor')
export class Actor implements IActor {
  @PrimaryGeneratedColumn()
  id: number; 
  
  @Column('varchar')
  imdb_name_id

  @Column('varchar')
  name: string;

  @Column('varchar')
  birth_name: string;

  @Column('double')
  height: number;

  @Column('longtext')
  bio: string;

  @Column('varchar')
  birth_details: string;

  @Column('double')
  birth_year: number;

  @Column('datetime')
  date_of_birth: string;

  @Column('varchar')
  death_details: string;

  @Column('double')
  death_year: number;

  @Column('datetime')
  date_of_death: string;

  @Column('varchar')
  place_of_death: string;

  @Column('varchar')
  reason_of_death: string;

  @Column('int')
  spounces: number;

  @Column('int')
  divorces: number;

  @Column('int')
  spouses_with_children: number;

  @Column('int')
  children: number;

  @Column('varchar')
  primary_profession: string;

  @Column('varchar')
  birth_day: string;

  @Column('varchar')
  state: string;

  @Column('varchar')
  countryname: string;

  @Column('varchar')
  short_country: string;

  cityId: number;;

  countryId: number;
}