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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CountryGetAllRequest } from './dto/getAll/countryGetAll.request';
import { CountryGetAllResponse } from './dto/getAll/countryGetAll.response';
import { CountryGetByIdResponse } from './dto/getById/countryGetById.response';
import { CountryCreateRequest } from './dto/create/countryCreate.request';
import { CountryCreateResponse } from './dto/create/countryCreate.response';
import { CountryUpdateRequest } from './dto/update/countryUpdate.request';
import { CountryUpdateResponse } from './dto/update/countryUpdate.response';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAll(@Query() model: CountryGetAllRequest): Promise<CountryGetAllResponse> {
    const { totalCount, items } = await this.countryService.getAll(model);

    return new CountryGetAllResponse(totalCount, items);
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<CountryGetByIdResponse> {
    const country = await this.countryService.getById(id);

    return new CountryGetByIdResponse(country);
  }

  @Post()
  async create(@Body() model: CountryCreateRequest): Promise<CountryCreateResponse> {
    const country = await this.countryService.create(model);

    return new CountryCreateResponse(country);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) countryId: number,
    @Body() model: CountryUpdateRequest,
  ): Promise<CountryUpdateResponse> {
    const country = await this.countryService.update(countryId, model);

    return new CountryUpdateResponse(country);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) countryId: number): Promise<void> {
    return this.countryService.delete(countryId);
  }
}
