import { PaginationRequest } from 'sdk/nest/dtos';

export class MovieGetListRequest extends PaginationRequest {
  order?: string;
}
