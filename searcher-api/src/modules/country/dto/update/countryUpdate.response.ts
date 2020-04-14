import { CountryDto } from '../common/country.dto';

export class CountryUpdateResponse {
  country: CountryDto;

  constructor(country?: CountryDto) {
    this.country = country;
  }
}
