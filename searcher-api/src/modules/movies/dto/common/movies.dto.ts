import { IMovies } from 'sdk';

export class MoviesDto implements IMovies {
  id: number;
  year: number;
  runtime: number;
  votes: number;
  title: string;
  description: string;
  rating: number;
  revenue: number;
  mpaaId: number;
  productionId: number;
  poster: string;
}
