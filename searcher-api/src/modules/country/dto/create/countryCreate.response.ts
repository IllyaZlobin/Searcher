import { CountryDto } from '../common/country.dto';

export class CountryCreateResponse {
  country: CountryDto;

  constructor(country?: CountryDto) {
    this.country = country;
  }
}
