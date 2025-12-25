import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ContextMiddleware } from './infrastructure/context';
import { HealthModule } from './modules/health/health.module';
import { MetaModule } from './modules/meta/meta.module';

@Module({
  imports: [HealthModule, MetaModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware).forRoutes('*');
  }
}
