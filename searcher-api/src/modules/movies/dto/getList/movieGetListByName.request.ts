import { PaginationRequest } from 'sdk/nest/dtos';

export class MovieGetListByNameRequest extends PaginationRequest {
  name: string;
}
