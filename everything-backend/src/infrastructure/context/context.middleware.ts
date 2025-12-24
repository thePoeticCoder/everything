import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { contextStore, RequestContext } from './context.store';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const context: RequestContext = {
      contextId: uuidv4(),
      startTime: Date.now(),
    };

    contextStore.run(context, () => {
      // Ensure context lives for the entire request lifecycle
      res.on('finish', () => {
        // No cleanup required; AsyncLocalStorage scope ends automatically
      });

      next();
    });
  }
}
