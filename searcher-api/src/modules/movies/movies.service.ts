import { Injectable } from '@nestjs/common';
import { MovieListVw, MovieDetailsVw, MovieReviewsVw, MovieStars, NotFoundException } from 'sdk';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Counted } from 'sdk/nest/dtos';
import { MovieListViewDto } from './dto/common/movieListView.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieListVw) private movieListViewRepository: Repository<MovieListVw>,
    @InjectRepository(MovieDetailsVw)
    private movieDetailsViewRepository: Repository<MovieDetailsVw>,
    @InjectRepository(MovieReviewsVw) private reviewsRepository: Repository<MovieReviewsVw>,
    @InjectRepository(MovieStars) private movieStarsRepository: Repository<MovieStars>,
  ) {}

  async getList(limit: number, offset: number, order?: string): Promise<Counted<MovieListViewDto>> {
    const entities = await this.movieListViewRepository.find({
      take: limit,
      skip: offset,
      order: {
        [order]: 'DESC',
      },
    });
    // TODO Fix this hard code. Movies quantity have to give from findAndCountMethod()
    return new Counted(1000, entities);
  }

  async getListByName(name: string, limit: number, offset: number): Promise<MovieListVw[]> {
    const response = await this.movieListViewRepository.find({
      where: {
        title: Like(`%${name}%`),
      },
      skip: offset,
      take: limit,
    });

    return response;
  }

  async getDetails(id: number): Promise<{ details; comments }> {
    const details = await this.movieDetailsViewRepository.findOne({ where: { id } });

    const comments = await this.reviewsRepository.find({
      where: {
        movieId: id,
      },
    });
    const itemsPerPage = 5;
    const page = 1;
    const totalPages = Math.round(comments.length / itemsPerPage);
    return { details, comments: { comments, totalPages, page, itemsPerPage } };
  }

  async getStars(movieId: number): Promise<number> {
    const isExist = await this.movieListViewRepository.findOne({ where: { id: movieId } });

    if (!isExist) {
      throw new NotFoundException(`Movie id - ${movieId} not found`, ['id']);
    }

    const [entities, totalCount] = await this.movieStarsRepository.findAndCount({
      where: { movieId },
    });

    if (totalCount === 0) {
      const averageStars = 0;
      return averageStars;
    }
    const total = entities.map(x => x.stars).reduce((prev, curr) => prev + curr);
    const averageStars = Math.floor(total / totalCount);

    return averageStars;
  }

  async setStars(
    stars: number,
    movieId: number,
    userId: number,
  ): Promise<{ stars; movieId; userId }> {
    const response = await this.movieStarsRepository.save({ stars, movieId, userId });
    return response;
  }
}
