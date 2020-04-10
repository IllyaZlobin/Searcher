import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { ICountry } from "../models/country.model";

@Entity('country')
export class Country implements ICountry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  name: string;

}