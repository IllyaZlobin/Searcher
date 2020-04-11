import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { ICountry } from "../../models/db/country.model";

@Entity('country')
export class Country implements ICountry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  name: string;

}