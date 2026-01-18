import { Controller, Get } from '@nestjs/common';
import { LoggerService } from '../../infrastructure/logger';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    LoggerService.info('Health check hit');
    return {
      status: 'ok',
    };
  }
}
