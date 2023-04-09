import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch(InternalServerErrorFilter)
export class InternalServerErrorFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorFilter, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = 'Internal Server Error';

    const errorResponse = {
      statusCode,
      message,
      error: 'Server error'
    };

    response.status(statusCode).json(errorResponse);
  }
}
