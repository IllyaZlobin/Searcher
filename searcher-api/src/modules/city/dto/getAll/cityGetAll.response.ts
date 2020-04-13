import { CityDto } from '../common/city.dto';

export class CityGetAllResponse {
  totalCount: number;
  cities: CityDto[];

  constructor(totalCount: number, cities?: CityDto[]) {
    this.totalCount = totalCount;
    this.cities = cities;
  }
}
