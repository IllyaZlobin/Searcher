import { Catch, ArgumentsHost, NotFoundException, HttpServer, Logger } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { ValidationException } from "../exceptions/validation.exception";
import { UserFriendlyException } from "../exceptions/userFriendly.exception";

@Catch()
export class ExceptionsFilter extends BaseExceptionFilter {
  constructor(applicationRef?: HttpServer, private logger?: Logger, private logLocalExceptions?: boolean) {
    super(applicationRef);
  }
  catch(exception: unknown, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    if (exception instanceof ValidationException) {
       const statusCode = exception.getStatus();
       response.status(statusCode).json({
         code: statusCode,
         message: exception.message,
         error: exception.errors 
       });
       
       return;
    };

    if (exception instanceof NotFoundException) {
      const statusCode = exception.getStatus();
      response.status(statusCode).json({
        error: exception.message,
      });

      return;
    };

    if (exception instanceof UserFriendlyException) {
      const statusCode = exception.getStatus();
      response.status(statusCode).json({
        message: exception.message,
        stack: exception.stack
      });

      return;
    };

    super.catch(exception, host);
  };  
};