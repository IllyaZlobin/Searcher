import { ICity } from 'sdk';

export class CityDto implements ICity {
  id: number;
  name: string;
  name_ancii: string;
  lat?: number;
  lng?: number;
  country: string;
  iso2?: string;
  iso3?: string;
  population?: number;
}
