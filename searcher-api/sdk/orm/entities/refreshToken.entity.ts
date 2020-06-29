import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRefreshToken } from 'sdk/models/db';

@Entity('refreshtoken')
export class RefreshToken implements IRefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  value: string;

  @Column('int')
  userId: number;

  @Column('date')
  expiresAt: Date;
}
