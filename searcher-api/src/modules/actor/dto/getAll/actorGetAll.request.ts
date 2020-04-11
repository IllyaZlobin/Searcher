import { PaginationRequest } from 'sdk/nest/dtos';
import { Search } from 'sdk/models/dtos';

export class ActoreGetAllRequest extends PaginationRequest implements Search {
  search?: string;
}
