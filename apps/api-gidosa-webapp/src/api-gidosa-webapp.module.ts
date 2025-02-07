import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiGidosaWebappController } from './api-gidosa-webapp.controller';
import { DatabaseModule } from '@app/gidosa-rdb/gidosa-rdb.module';
//import { MemberModule } from './apis/member/member.module';
//import { AuthModule } from './apis/auth/auth.module';

@Module({
  imports: [
    //AuthModule,
    //MemberModule,
    ConfigModule.forRoot({
      // isGlobal: true,
      // // cache: false,
      // envFilePath: ['.env'],
      // load: [() => {
      //   // console.log('Loading ENV:', process.env);
      //   return {};
      // }],
    }),
    DatabaseModule,
  ],
  controllers: [ApiGidosaWebappController],
  providers: [],
})
export class ApiGidosaWebappModule {}
