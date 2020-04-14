import { CountryDto } from '../common/country.dto';

export class CountryGetByIdResponse {
  country: CountryDto;

  constructor(country?: CountryDto) {
    this.country = country;
  }
}
