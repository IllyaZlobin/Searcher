import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { IReviews } from "../../models/db/reviews.model";

@Entity('reviews')
export class Reviews implements IReviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  review_text: string;

  @Column('varchar')
  review_data: string;

  @Column('bool')
  is_spoiler: boolean;

  @Column('int')
  userId: number;

  @Column('int')
  movieId: number
}