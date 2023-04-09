import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.UNAUTHORIZED;
    const message = exception.message || 'Unauthorized';

    const errorResponse = {
      statusCode,
      message,
      error: 'Unauthorized'
    };

    response.status(statusCode).json(errorResponse);
  }
}
