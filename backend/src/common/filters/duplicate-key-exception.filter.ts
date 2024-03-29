import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DuplicateKeyExceptionFilter implements ExceptionFilter {
  constructor(private readonly entityName: string) {}

  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.CONFLICT;
    const message = `${this.entityName} with these data already exists`;

    const errorResponse = {
      statusCode,
      message,
      error: 'Conflict'
    };

    response.status(statusCode).json(errorResponse);
  }
}
