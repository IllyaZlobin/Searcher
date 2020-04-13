import { CityDto } from '../common/city.dto';

export class CityGetByIdResponse {
  city: CityDto;

  constructor(city?: CityDto) {
    this.city = city;
  }
}
