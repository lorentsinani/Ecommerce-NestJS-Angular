import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryExceptionFilter implements ExceptionFilter {
  constructor(private readonly entityName: string) {}

  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();

    const statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
    const message = `${this.entityName} ${exception.message}"`;
    const error = 'Query failed error';

    const errorResponse = {
      statusCode,
      message,
      error
    };

    response.status(statusCode).json(errorResponse);
  }
}
