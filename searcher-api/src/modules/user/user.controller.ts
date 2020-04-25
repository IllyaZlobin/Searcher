import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UseGuards,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { Role } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk';
import { UserService } from './user.service';
import { UserGetAllResponse } from './dto/getAll/userGetAll.response';
import { UserGetAllRequest } from './dto/getAll/userGetAll.request';
import { UserGetByIdResponse } from './dto/getById/userGetById.response';
import { UserCreateResponse } from './dto/create/userCreate.response';
import { UserCreateRequest } from './dto/create/userCreate.request';
import { UserUpdateRequest } from './dto/update/userUpdate.request';
import { UserUpdateResponse } from './dto/update/userUpdate.response';

// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin)
  @Get()
  async getAll(@Query() model: UserGetAllRequest): Promise<UserGetAllResponse> {
    const { limit, offset } = model;

    const { totalCount, items } = await this.userService.getAll(limit, offset);

    return new UserGetAllResponse(items, totalCount);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin)
  @Get(':id')
  async getById(@Param('id') userId: number): Promise<UserGetByIdResponse> {
    const user = await this.userService.getById(userId);

    return new UserGetByIdResponse(user);
  }

  @Post('/new')
  async create(@Body() model: UserCreateRequest): Promise<UserCreateResponse> {
    const user = await this.userService.create(model);

    return new UserCreateResponse(user);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin, UserRoles.User)
  @Put('/edit/:id')
  async update(
    @Param('id', ParseIntPipe) userId: number,
    @Body() model: UserUpdateRequest,
  ): Promise<UserUpdateResponse> {
    const updatedUser = await this.userService.update(userId, model);

    return new UserUpdateResponse(updatedUser);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin)
  @Delete(':id')
  async delete(@Param('id') userId: number): Promise<void> {
    return this.userService.delete(userId);
  }
}
