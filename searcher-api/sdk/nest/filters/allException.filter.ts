import { Catch, HttpServer, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from '../loggers/logger';
import {
  UserFriendlyException,
  ValidationException,
  NotFoundException,
} from '../exceptions';
import { LoggerRequestInfo } from '../loggers';
import { ValidationError } from 'sdk/models/validation';
import { ApiBaseResponse } from 'sdk/models/responses';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    applicationRef?: HttpServer,
    private logger?: Logger,
    private logLocalExceptions?: boolean,
  ) {
    super(applicationRef);
  }

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof UserFriendlyException) {
      const statusCode = exception.getStatus();
      const apiResponse = this.getApiResponse([
        { message: exception.message, property: [] },
      ]);

      response.status(statusCode).json(apiResponse);
      return;
    }

    if (exception instanceof ValidationException) {
      const statusCode = exception.getStatus();
      const apiResponse = this.getApiResponse(exception.errors);

      response.status(statusCode).json(apiResponse);
      return;
    }

    if (exception instanceof NotFoundException) {
      const statusCode = exception.getStatus();
      const apiResponse = this.getApiResponse([
        { message: exception.message, property: exception.errors },
      ]);

      response.status(statusCode).json(apiResponse);
      return;
    }

    if (this.logger && this.logLocalExceptions) {
      const requestInfo: LoggerRequestInfo = {
        host: request.hostname,
        method: request.method,
        protocol: request.protocol,
        url: request.originalUrl,
        body: request.body ? JSON.stringify(request.body) : null,
      };

      this.logger.error(exception, requestInfo);
    }

    super.catch(exception, host);
  }

  private getApiResponse(errors: ValidationError[]): ApiBaseResponse<null> {
    return {
      data: null,
      errors,
    };
  }
}
