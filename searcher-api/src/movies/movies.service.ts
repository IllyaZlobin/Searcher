import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movies } from "./movies.entity";
import { Repository } from "typeorm";
import { MpaaRating } from "./mpaa.entity";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies) private readonly moviesRepository: Repository<Movies>,
    @InjectRepository(MpaaRating) private readonly mpaaRepository: Repository<MpaaRating>) {}

  async getMovies() {
    return this.moviesRepository.find({select: ['title'], relations: ['mpaa', 'production']});
  }
}