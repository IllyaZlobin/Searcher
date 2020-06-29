/* eslint-disable no-shadow */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews, Movies, User } from 'sdk';
import { Repository, In } from 'typeorm';
import { isEntityExist } from 'sdk/nest/helpers/isEntityExist';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewsService {
  itemsPerPage = 5;
  constructor(
    @InjectRepository(Reviews) private readonly reviewRepository: Repository<Reviews>,
    @InjectRepository(Movies) private readonly movieRepository: Repository<Reviews>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async addReview(model: ReviewDto): Promise<void> {
    const { review_data = new Date().toLocaleDateString(), movieId } = model;

    await isEntityExist(movieId, this.movieRepository);

    const entity = { ...model, review_data };

    await this.reviewRepository.save(entity);
  }

  async getComments(
    movieId: number,
    page: number,
  ): Promise<{ comments; currentPage; totalPages; itemsPerPage }> {
    if (page === 1) {
      const [entities, totalCount] = await this.reviewRepository.findAndCount({
        where: {
          movieId,
        },
        take: this.itemsPerPage,
      });
      const users = await this.userRepository.find({
        where: { id: In(entities.map(x => x.userId)) },
      });
      const comments = [];
      Object.values(entities).forEach(e => {
        const { id, review_data, review_text, movieId } = e;
        const { name, surname } = users.find(x => x.id === e.userId);
        comments.push({
          id,
          review_text,
          review_data,
          movieId,
          user: `${name} ${surname}`,
        });
      });
      return {
        comments,
        currentPage: page,
        totalPages: Math.ceil(totalCount / this.itemsPerPage),
        itemsPerPage: this.itemsPerPage,
      };
    }
    const offset = page * this.itemsPerPage - this.itemsPerPage;
    const [entities, totalCount] = await this.reviewRepository.findAndCount({
      where: {
        movieId,
      },
      skip: offset,
      take: this.itemsPerPage,
    });
    const users = await this.userRepository.find({
      where: { id: In(entities.map(x => x.userId)) },
    });
    const comments = [];
    Object.values(entities).forEach(e => {
      const { id, review_data, review_text, movieId } = e;
      const { name, surname } = users.find(x => x.id === e.userId);
      comments.push({
        id,
        review_text,
        review_data,
        movieId,
        user: `${name} ${surname}`,
      });
    });
    return {
      comments,
      currentPage: page,
      totalPages: Math.ceil(totalCount / this.itemsPerPage),
      itemsPerPage: this.itemsPerPage,
    };
  }
}
