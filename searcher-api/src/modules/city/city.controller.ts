import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  ParseIntPipe,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { Role } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk';
import { CityService } from './city.service';
import { CityGetAllRequest } from './dto/getAll/cityGetAll.request';
import { CityGetAllResponse } from './dto/getAll/cityGetAll.response';
import { CityGetByIdResponse } from './dto/getById/cityGetById.response';
import { CityCreateRequest } from './dto/create/cityCreate.request';
import { CityCreateResponse } from './dto/create/cityCreate.response';
import { CityUpdateRequest } from './dto/update/cityUpdate.request';
import { CityUpdateResponse } from './dto/update/cityUpdate.response';

@ApiTags('city')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @Role(UserRoles.Admin)
  async getAll(@Query() model: CityGetAllRequest): Promise<CityGetAllResponse> {
    const { items, totalCount } = await this.cityService.getAll(model);

    return new CityGetAllResponse(totalCount, items);
  }

  @Get(':id')
  @Role(UserRoles.Admin)
  async getById(@Param('id') cityId: number): Promise<CityGetByIdResponse> {
    const city = await this.cityService.getById(cityId);

    return new CityGetByIdResponse(city);
  }

  @Post()
  @Role(UserRoles.Admin)
  async create(@Body() model: CityCreateRequest): Promise<CityCreateResponse> {
    const city = await this.cityService.create(model);

    return new CityCreateResponse(city);
  }

  @Put(':id')
  @Role(UserRoles.Admin)
  async update(
    @Param('id', ParseIntPipe) cityId: number,
    @Body() model: CityUpdateRequest,
  ): Promise<CityUpdateResponse> {
    const city = await this.cityService.update(cityId, model);

    return new CityUpdateResponse(city);
  }

  @Delete(':id')
  @Role(UserRoles.Admin)
  async delete(@Param('id') cityId: number): Promise<void> {
    return this.cityService.delete(cityId);
  }
}
