import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberAdminController } from './member-admin.controller';
import { MemberAdminService } from './member-admin.service';
import { MemberAdmin } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberAdmin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MemberAdmin,
    ]),
  ],
  controllers: [
    MemberAdminController, //
  ],
  providers: [
    MemberAdminService, //
  ],
  exports: [MemberAdminService],
})
export class MemberAdminModule {}