import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from '../logger';
import { ContextService } from '../context';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Log full error internally
    LoggerService.error('Unhandled exception', {
      contextId: ContextService.getContextId(),
      path: request.url,
      method: request.method,
      error:
        exception instanceof Error
          ? {
              name: exception.name,
              message: exception.message,
              stack: exception.stack,
            }
          : exception,
    });

    // Always return masked response
    response.status(500).json({
      message: 'Something went wrong',
    });
  }
}
