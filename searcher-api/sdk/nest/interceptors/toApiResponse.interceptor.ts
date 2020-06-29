import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ApiBaseResponse } from 'sdk/models/responses';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ToApiResponseInterceptor<T>
  implements NestInterceptor<T, ApiBaseResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiBaseResponse<T>> {
    return next.handle().pipe(map(data => ({ errors: [], data })));
  }
}
