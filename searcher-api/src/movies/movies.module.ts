import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './movies.entity';
import { MpaaRating } from './mpaa.entity';
import { ProdCompany } from 'src/prodcompany/prodcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies, MpaaRating, ProdCompany])],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesModule]
})
export class MoviesModule {}
