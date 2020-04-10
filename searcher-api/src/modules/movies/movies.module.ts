import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from '../../common/db/entities/movies.entity';
import { MpaaRating } from '../../common/db/entities/mpaa.entity';
import { ProdCompany } from '../../common/db/entities/prodcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies, MpaaRating, ProdCompany])],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesModule]
})
export class MoviesModule {}
