import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserInfoVw } from 'sdk';
import { UserService } from './user.service';
import { UserGetAllResponse } from './dto/getAll/userGetAll.response';

// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserGetAllResponse> {
    const [user, total] = await this.userService.getAll();
    const response = new UserGetAllResponse(user, total);
    return response;
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<UserInfoVw> {
    return this.userService.getById(id);
  }
}
