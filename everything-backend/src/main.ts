import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './infrastructure/errors';
import { ConfigService } from './infrastructure/config';
import { LoggerService } from './infrastructure/logger';

async function bootstrap() {
  const config = ConfigService.load();

  const app = await NestFactory.create(AppModule);

  // 👇 allow Nest to receive SIGTERM / SIGINT
  app.enableShutdownHooks();

  app.useGlobalFilters(new GlobalExceptionFilter());

  const server = await app.listen(config.port);

  const shutdown = async (signal: string) => {
    LoggerService.info('Shutdown signal received', { signal });

    server.close(() => {
      LoggerService.info('HTTP server closed');
      process.exit(0);
    });

    // fallback force exit
    setTimeout(() => {
      LoggerService.error('Force shutdown');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

bootstrap();
