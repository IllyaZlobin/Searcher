import { Injectable } from '@nestjs/common';
import { MovieListVw, MovieDetailsVw, MovieReviewsVw } from 'sdk';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Counted } from 'sdk/nest/dtos';
import { MovieListViewDto } from './dto/common/movieListView.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieListVw) private movieListViewRepository: Repository<MovieListVw>,
    @InjectRepository(MovieDetailsVw)
    private movieDetailsViewRepository: Repository<MovieDetailsVw>,
    @InjectRepository(MovieReviewsVw) private reviewsRepository: Repository<MovieReviewsVw>,
  ) {}

  async getList(limit: number, offset: number): Promise<Counted<MovieListViewDto>> {
    const entities = await this.movieListViewRepository.find({
      take: limit,
      skip: offset,
    });
    // TODO Fix this hard code. Movies quantity have to give from findAndCountMethod()
    return new Counted(1000, entities);
  }

  async getDetails(id: number): Promise<{ details; commentsА }> {
    const details = await this.movieDetailsViewRepository.findOne({ where: { id } });

    const comments = await this.reviewsRepository.find({
      where: {
        movieId: id,
      },
    });

    return { details, comments };
  }
}
