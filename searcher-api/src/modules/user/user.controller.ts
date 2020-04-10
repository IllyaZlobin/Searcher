import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGetAllOutput } from './dto/getAll/userGetAll.output';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/jwtAuthGuard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
  
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserGetAllOutput> {
    const [user, total] = await this.userService.getAll();
    const response = new UserGetAllOutput(user, total);
    return response;
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.userService.getById(id);  
  }
}