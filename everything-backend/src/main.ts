import 'dotenv/config'; // 👈 MUST be first

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './infrastructure/errors';
import { ConfigService } from './infrastructure/config';

async function bootstrap() {
  // 🔒 Load & validate env AFTER dotenv
  const config = ConfigService.load();

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(config.port);
}
bootstrap();
