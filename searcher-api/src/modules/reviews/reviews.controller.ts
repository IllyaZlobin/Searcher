import { Controller, Post, Body, UseGuards, Param, ParseIntPipe, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role, User } from 'sdk/nest/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRoles } from 'sdk';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { ReviewsService } from './reviews.service';
import { AddReviewRequest } from './addReview/addReview.request';

@Controller('reviews')
@ApiTags('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.User, UserRoles.Admin)
  @ApiBearerAuth()
  async addComment(@Body() model: AddReviewRequest, @User('id') userId): Promise<void> {
    await this.reviewsService.addReview({ ...model, userId });
  }

  @Get(':id/:page')
  async getComments(
    @Param('id', ParseIntPipe) movieId: number,
    @Param('page', ParseIntPipe) page: number,
  ): Promise<{ comments; currentPage; totalPages; itemsPerPage }> {
    return this.reviewsService.getComments(movieId, page);
  }
}
