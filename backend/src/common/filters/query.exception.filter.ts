import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryExceptionFilter implements ExceptionFilter {
  constructor(private readonly entityName: string) {}

  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    let statusCode = HttpStatus.CONFLICT;
    let message = `${this.entityName} with these data already exists`;
    let error = 'Query failed';

    if (exception.message.includes('FOREIGN KEY constraint')) {
      statusCode = HttpStatus.BAD_REQUEST;
      message = 'Foreign key constraint violation. The referred foreign key does not exist.';
      error = 'Foreign key does not exist';
    } else if (exception.message.includes('duplicate key value violates unique constraint')) {
      statusCode = HttpStatus.CONFLICT;
      message = `${this.entityName} with these data already exists`;
      error = 'Conflict';
    }

    const errorResponse = {
      statusCode,
      message,
      error
    };

    response.status(statusCode).json(errorResponse);
  }
}
