import { ViewEntity, ViewColumn } from 'typeorm';
import { IMovieDetailsVw } from 'sdk/models/db';

@ViewEntity('movie_details_vw')
export class MovieDetailsVw implements IMovieDetailsVw {
  @ViewColumn()
  id: number;

  @ViewColumn()
  year: number;

  @ViewColumn()
  runtime: number;

  @ViewColumn()
  votes: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  rating: number;

  @ViewColumn()
  revenue: number;

  @ViewColumn()
  mpaa: string;

  @ViewColumn()
  production: string;

  @ViewColumn()
  poster: string;

  @ViewColumn()
  genres: string;

  @ViewColumn()
  directors: string;

  @ViewColumn()
  actors: string;
}
