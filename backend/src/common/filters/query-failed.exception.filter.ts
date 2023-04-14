import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedExceptionFilter extends BaseExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost): void {
    const response: Response = host.switchToHttp().getRequest();
    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const message = exception.message || exception.driverError || 'Query failed';

    const errorResponse = {
      statusCode,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      message,
      error: 'Query failed'
    };

    response.status(statusCode).json(errorResponse);
  }
}
