import { IReviews } from 'sdk';

export class ReviewDto implements IReviews {
  id: number;
  review_text: string;
  review_data: string;
  userId: number;
  movieId: number;
  is_spoiler: boolean;
}
