import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IProdCompany } from "../models/prodcompany.model";

@Entity('productioncompany')
export class ProdCompany implements IProdCompany {
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

}