import { Controller, Get, Query, UseGuards, Param, ParseIntPipe } from '@nestjs/common';
import { Role } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { MovieGetListRequest } from './dto/getList/movieGetList.request';
import { MoviesService } from './movies.service';
import { MovieGetListResponse } from './dto/getList/movieGetList.response';

@Controller('movies')
@ApiTags('movies')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RoleGuard)
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/list')
  @Role(UserRoles.User, UserRoles.Admin)
  async getList(@Query() model: MovieGetListRequest): Promise<MovieGetListResponse> {
    const { limit, offset } = model;
    const { totalCount, items } = await this.movieService.getList(limit, offset);

    return new MovieGetListResponse(totalCount, items);
  }

  @Get(':id')
  @Role(UserRoles.Admin, UserRoles.User)
  async getDetails(@Param('id', ParseIntPipe) id: number): Promise<{ comments; details }> {
    const { comments, details } = await this.movieService.getDetails(id);
    return { comments, details };
  }
}
