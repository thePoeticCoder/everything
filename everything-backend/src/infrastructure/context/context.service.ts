import { contextStore, RequestContext } from './context.store';

export class ContextService {
  static getContext(): RequestContext | undefined {
    return contextStore.getStore();
  }

  static getContextId(): string | undefined {
    return contextStore.getStore()?.contextId;
  }

  static getStartTime(): number | undefined {
    return contextStore.getStore()?.startTime;
  }
}
