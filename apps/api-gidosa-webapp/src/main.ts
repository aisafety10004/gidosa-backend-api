import { NestFactory } from '@nestjs/core';
import { ApiGidosaWebappModule } from './api-gidosa-webapp.module';
// import { UrlConsts } from '@app/gidosa-common-api/constants/gidosa/UrlConst';
import { UrlConsts } from '../../../libs/gidosa-common-api/constants/gidosa/UrlConsts';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 트랜잭션
  initializeTransactionalContext();

  const app = await NestFactory.create(ApiGidosaWebappModule);
  app.useGlobalPipes(new ValidationPipe());

  // cors 설정
  app.enableCors({
    origin: [process.env.ORIGIN],
    credentials: true,
  });
  app.setGlobalPrefix(UrlConsts.PREFIX_API_BASE);

  await app.listen(process.env.PORT, () => {
    console.log('==========================================');
    console.log('PORT:', process.env.PORT, '🐶🐶🐶 GIDOSA 서버 오픈 🐶🐶🐶');
    console.log('==========================================');
  });
}
bootstrap();
