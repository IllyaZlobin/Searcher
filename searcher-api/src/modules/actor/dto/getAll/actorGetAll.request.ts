import { PaginationRequest } from 'sdk/nest/dtos';
import { Search } from 'sdk/models/dtos';

export class ActorGetAllRequest extends PaginationRequest implements Search {
  search?: string;
}
