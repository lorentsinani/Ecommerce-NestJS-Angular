import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(QueryFailedError)
export class ForeignKeyExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse() as Response;
    const statusCode = HttpStatus.BAD_REQUEST;
    const message = 'Foreign key constraint violation. The referred foreign key does not exist.';

    const errorResponse = {
      statusCode,
      message,
      error: 'Foreign key does not exist'
    };

    response.status(statusCode).json(errorResponse);
  }
}
