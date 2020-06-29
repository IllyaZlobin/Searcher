import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews, Movies, User } from 'sdk';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews, Movies, User])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
