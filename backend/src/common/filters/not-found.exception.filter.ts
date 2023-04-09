import { Catch, NotFoundException, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter extends BaseExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost): void {
    const response: Response = host.switchToHttp().getRequest();
    const statusCode = HttpStatus.NOT_FOUND;
    const message = exception.message || 'Not Found';

    const errorResponse = {
      statusCode,
      message,
      error: 'Not Found'
    };

    response.status(statusCode).json(errorResponse);
  }
}
