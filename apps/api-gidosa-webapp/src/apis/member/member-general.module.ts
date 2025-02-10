import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberGeneralController } from './member-general.controller';
import { MemberGeneralService } from './member-general.service';
import { MemberGeneral } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberGeneral.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MemberGeneral,
    ]),
  ],
  controllers: [
    MemberGeneralController, //
  ],
  providers: [
    MemberGeneralService, //
  ],
  exports: [MemberGeneralService],
})
export class MemberGeneralModule {}