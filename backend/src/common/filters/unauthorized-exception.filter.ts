import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, UnauthorizedException } from '@nestjs/common';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
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
