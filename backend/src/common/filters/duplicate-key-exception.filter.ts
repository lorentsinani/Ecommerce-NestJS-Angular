import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DuplicateKeyExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.CONFLICT;
    const message = 'Duplicate key error';

    const errorResponse = {
      statusCode,
      message,
      error: 'Conflict'
    };

    response.status(statusCode).json(errorResponse);
  }
}
