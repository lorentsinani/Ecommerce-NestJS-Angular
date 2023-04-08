import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';

@Catch()
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const statusCode = HttpStatus.UNAUTHORIZED;
    const message = 'Unauthorized';

    const errorResponse = {
      statusCode,
      message,
      error: 'Unauthorized'
    };

    response.status(statusCode).json(errorResponse);
  }
}
