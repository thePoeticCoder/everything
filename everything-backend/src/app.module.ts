import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DebugModule } from './modules/debug/debug.module';
import { ContextMiddleware } from './infrastructure/context';

@Module({
  imports: [DebugModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware).forRoutes('*');
  }
}
