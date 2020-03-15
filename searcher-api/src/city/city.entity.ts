import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Actor } from "src/actor/actor.entity";
import { User } from "src/user/user.entity";

@Entity('city')
export class City {
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

  @OneToMany(type => Actor, actor => actor.city)
  actors: Actor[]

  @OneToMany(type => User, user => user.city)
  users: User[]
}