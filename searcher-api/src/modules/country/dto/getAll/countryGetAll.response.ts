import { CountryDto } from '../common/country.dto';

export class CountryGetAllResponse {
  totalCount: number;
  countries: CountryDto[];

  constructor(totalCount?: number, countries?: CountryDto[]) {
    this.totalCount = totalCount;
    this.countries = countries;
  }
}
