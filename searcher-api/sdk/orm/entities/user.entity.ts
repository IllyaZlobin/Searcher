import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRoles } from 'sdk/models/enums/userRoles';
import { IUser } from '../../models/db/user.model';
import { Gender } from '../../models/enums/gender';

@Entity('user')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  email: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  surname?: string;

  @Column('varchar')
  gender: Gender;

  @Column('int')
  age: number;

  @Column('varchar')
  web?: string;

  @Column('varchar')
  password: string;

  @Column({ type: 'enum', enum: UserRoles })
  role: UserRoles;

  @Column('int')
  cityId?: number;

  @Column('int')
  countryId?: number;
}
