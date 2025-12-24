import { ContextService } from '../context';

type LogPayload = Record<string, unknown>;

export class LoggerService {
  private static buildLog(
    level: 'info' | 'error',
    message: string,
    payload?: LogPayload,
  ) {
    return {
      timestamp: new Date().toISOString(),
      level,
      contextId: ContextService.getContextId(),
      message,
      ...(payload || {}),
    };
  }

  static info(message: string, payload?: LogPayload) {
    const log = this.buildLog('info', message, payload);
    process.stdout.write(JSON.stringify(log) + '\n');
  }

  static error(message: string, payload?: LogPayload) {
    const log = this.buildLog('error', message, payload);
    process.stderr.write(JSON.stringify(log) + '\n');
  }
}
