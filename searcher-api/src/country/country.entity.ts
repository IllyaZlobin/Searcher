import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Actor } from "src/actor/actor.entity";
import { User } from "src/user/user.entity";

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  name: string;

  @OneToMany(type => Actor, actor => actor.country)
  actors: Actor[]

  @OneToMany(type => User, user => user.country)
  users: User[]
}