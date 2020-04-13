import { CityDto } from '../common/city.dto';

export class CityUpdateResponse {
  city: CityDto;

  constructor(city?: CityDto) {
    this.city = city;
  }
}
