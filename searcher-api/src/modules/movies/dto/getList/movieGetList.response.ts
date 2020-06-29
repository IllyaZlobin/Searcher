import { MovieListViewDto } from '../common/movieListView.dto';

export class MovieGetListResponse {
  totalCount: number;
  movies: MovieListViewDto[];

  constructor(totalCount?: number, movies?: MovieListViewDto[]) {
    this.totalCount = totalCount;
    this.movies = movies;
  }
}
