import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(QueryFailedError)
export class DuplicateKeyExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.CONFLICT;
    const message = exception.message || 'Duplicate key error';

    const errorResponse = {
      statusCode,
      message,
      error: 'Conflict'
    };

    response.status(statusCode).json(errorResponse);
  }
}
