import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { Role } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk';
import { CountryService } from './country.service';
import { CountryGetAllRequest } from './dto/getAll/countryGetAll.request';
import { CountryGetAllResponse } from './dto/getAll/countryGetAll.response';
import { CountryGetByIdResponse } from './dto/getById/countryGetById.response';
import { CountryCreateRequest } from './dto/create/countryCreate.request';
import { CountryCreateResponse } from './dto/create/countryCreate.response';
import { CountryUpdateRequest } from './dto/update/countryUpdate.request';
import { CountryUpdateResponse } from './dto/update/countryUpdate.response';

@ApiTags('country')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @Role(UserRoles.Admin)
  async getAll(@Query() model: CountryGetAllRequest): Promise<CountryGetAllResponse> {
    const { totalCount, items } = await this.countryService.getAll(model);

    return new CountryGetAllResponse(totalCount, items);
  }

  @Get(':id')
  @Role(UserRoles.Admin)
  async getById(@Param('id', ParseIntPipe) id: number): Promise<CountryGetByIdResponse> {
    const country = await this.countryService.getById(id);

    return new CountryGetByIdResponse(country);
  }

  @Post()
  @Role(UserRoles.Admin)
  async create(@Body() model: CountryCreateRequest): Promise<CountryCreateResponse> {
    const country = await this.countryService.create(model);

    return new CountryCreateResponse(country);
  }

  @Put(':id')
  @Role(UserRoles.Admin)
  async update(
    @Param('id', ParseIntPipe) countryId: number,
    @Body() model: CountryUpdateRequest,
  ): Promise<CountryUpdateResponse> {
    const country = await this.countryService.update(countryId, model);

    return new CountryUpdateResponse(country);
  }

  @Delete(':id')
  @Role(UserRoles.Admin)
  async delete(@Param('id', ParseIntPipe) countryId: number): Promise<void> {
    return this.countryService.delete(countryId);
  }
}
