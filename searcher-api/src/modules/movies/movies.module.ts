import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movies } from '../../../sdk/orm/entities/movies.entity';
import { MpaaRating } from '../../../sdk/orm/entities/mpaa.entity';
import { ProdCompany } from '../../../sdk/orm/entities/prodcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies, MpaaRating, ProdCompany])],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [],
})
export class MoviesModule {}
