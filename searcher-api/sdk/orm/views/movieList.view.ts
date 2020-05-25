import { ViewEntity, ViewColumn } from 'typeorm';
import { IMovieListVw } from '../../models/db/movieListVw.model';

@ViewEntity('movie_list_vw')
export class MovieListVw implements IMovieListVw {
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
  comments: number;
}
