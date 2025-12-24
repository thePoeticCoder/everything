import { Controller, Get } from '@nestjs/common';
import { ContextService } from '../../infrastructure/context';

@Controller('debug')
export class DebugController {
  @Get('context')
  getContext() {
    return {
      contextId: ContextService.getContextId(),
    };
  }
}
//http://localhost:3000/debug/context
