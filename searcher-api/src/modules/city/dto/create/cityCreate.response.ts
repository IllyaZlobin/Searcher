import { CityDto } from '../common/city.dto';

export class CityCreateResponse {
  city: CityDto;

  constructor(city?: CityDto) {
    this.city = city;
  }
}
