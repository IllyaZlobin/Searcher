import { Controller, Get, Query, UseGuards, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { Role, User } from 'sdk/nest/decorators';
import { UserRoles, MovieListVw } from 'sdk';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { MovieGetListRequest } from './dto/getList/movieGetList.request';
import { MoviesService } from './movies.service';
import { MovieGetListResponse } from './dto/getList/movieGetList.response';
import { MovieGetListByNameRequest } from './dto/getList/movieGetListByName.request';
import { SetStarsRequest } from './dto/setStars/setStars.request';

@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/list')
  async getList(@Query() model: MovieGetListRequest): Promise<MovieGetListResponse> {
    const { limit, offset, order } = model;
    const { totalCount, items } = await this.movieService.getList(limit, offset, order);

    return new MovieGetListResponse(totalCount, items);
  }

  @Get(':id')
  async getDetails(@Param('id', ParseIntPipe) id: number): Promise<{ comments; details }> {
    const { comments, details } = await this.movieService.getDetails(id);
    return { comments, details };
  }

  @Get('/list/name')
  async getListByName(@Query() model: MovieGetListByNameRequest): Promise<MovieListVw[]> {
    const { name, limit, offset } = model;
    return this.movieService.getListByName(name, limit, offset);
  }

  @Get('/stars/:movieId')
  async getStars(@Param('movieId', ParseIntPipe) movieId: number): Promise<{ averageStars }> {
    const response = await this.movieService.getStars(movieId);
    return { averageStars: response };
  }

  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.User, UserRoles.Admin)
  @ApiBearerAuth()
  @Post('/stars/:movieId')
  async setStars(
    @Body() model: SetStarsRequest,
    @Param('movieId', ParseIntPipe) movieId: number,
    @User('id') userId: number,
  ): Promise<{ stars; movieId; userId }> {
    const { stars } = model;
    const response = await this.movieService.setStars(stars, movieId, userId);
    return response;
  }
}
