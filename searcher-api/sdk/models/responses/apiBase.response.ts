import { ValidationError } from '../validation';

export interface ApiBaseResponse<T> {
  errors: ValidationError[];
  data: T;
}
