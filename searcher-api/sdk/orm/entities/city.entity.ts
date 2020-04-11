import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { ICity } from "../../models/db/city.model";

@Entity('city')
export class City implements ICity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  name: string;

  @Column('varchar')
  name_ancii: string;

  @Column('double')
  lat: number;

  @Column('double')
  lng: number;

  @Column('varchar')
  country: string;

  @Column('varchar')
  iso2: string;

  @Column('varchar')
  iso3: string;

  @Column('bigint')
  population: number;

}