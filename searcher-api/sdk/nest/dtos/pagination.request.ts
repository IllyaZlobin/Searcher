import { Pagination } from 'sdk/models/dtos/pagination';

export class PaginationRequest implements Pagination {
  limit?: number = 50;
  offset?: number = 0;
}
