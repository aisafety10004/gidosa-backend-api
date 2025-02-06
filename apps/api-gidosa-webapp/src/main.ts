import { NestFactory } from '@nestjs/core';
import { ApiGidosaWebappModule } from './api-gidosa-webapp.module';
// import { UrlConst } from '@app/gidosa-common-api/constants/gidosa/UrlConst';
import { UrlConst } from '../../../libs/gidosa-common-api/constants/gidosa/UrlConst';

async function bootstrap() {
  const app = await NestFactory.create(ApiGidosaWebappModule);

  // cors 설정
  app.enableCors({
    origin: [process.env.ORIGIN],
    credentials: true,
  });
  app.setGlobalPrefix(UrlConst.PREFIX_API_BASE);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
