import { Controller, Get } from '@nestjs/common';
import { ContextService } from '../../infrastructure/context';
import { LoggerService } from '../../infrastructure/logger';

@Controller('debug')
export class DebugController {
  @Get('context')
  getContext() {
    LoggerService.info('Debug context endpoint hit');
    // throw new Error('Test crash');

    return {
      contextId: ContextService.getContextId(),
    };
  }
}

//http://localhost:3000/debug/context
