import { ViewEntity, ViewColumn } from 'typeorm';
import { IMovieReviewsVw } from 'sdk/models';

@ViewEntity('movie_reviews_vw')
export class MovieReviewsVw implements IMovieReviewsVw {
  @ViewColumn()
  id: number;

  @ViewColumn()
  movieId: number;

  @ViewColumn()
  review_text: string;

  @ViewColumn()
  review_data: string;

  @ViewColumn()
  username: string;
}
