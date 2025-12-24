import { AsyncLocalStorage } from 'async_hooks';

export interface RequestContext {
  contextId: string;
  startTime: number;
}

export const contextStore = new AsyncLocalStorage<RequestContext>();
