import { NestFactory } from '@nestjs/core';
import { ApiGidosaWebappModule } from './api-gidosa-webapp.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGidosaWebappModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
