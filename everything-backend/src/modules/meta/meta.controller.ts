import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../../infrastructure/config';
import { ContextService } from '../../infrastructure/context';
import { LoggerService } from '../../infrastructure/logger';

@Controller('meta')
export class MetaController {
  @Get()
  meta() {
    const config = ConfigService.get();

    LoggerService.info('Meta endpoint hit', {
      env: config.nodeEnv,
    });

    return {
      environment: config.nodeEnv,
      uptimeSeconds: Math.floor(process.uptime()),
      contextId: ContextService.getContextId(),
    };
  }
}
