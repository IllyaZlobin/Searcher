import { IMovieStars } from 'sdk/models';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('moviestars')
export class MovieStars implements IMovieStars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  movieId: number;

  @Column('int')
  userId: number;

  @Column('int')
  stars: number;
}
