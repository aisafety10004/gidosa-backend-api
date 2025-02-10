import { UrlConsts } from '@app/gidosa-common-api/constants/gidosa/UrlConsts';
import { GidosaAuthGuard } from '@app/gidosa-common/guards/gidosa.guard';
import { Body, Controller, Post, Get, UseGuards, Param, Put } from '@nestjs/common';
import { MemberAdminService } from './member-admin.service';
import { MemberAdmin } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberAdmin.entity';

@Controller(UrlConsts.PREFIX_V3_BASE + UrlConsts.PREFIX_ADMIN_MEMBER_BASE)
@UseGuards(GidosaAuthGuard('access'))
export class MemberAdminController {
  constructor(private readonly memberAdminService: MemberAdminService) {}

  @Post()
  async createMemberAdmin(@Body() memberAdmin: MemberAdmin): Promise<MemberAdmin> {
    return this.memberAdminService.createMemberAdmin(memberAdmin);
  }

  @Get()
  async findAllMemberAdmins(): Promise<MemberAdmin[]> {
    return this.memberAdminService.findAllMemberAdmins();
  }

  @Get(':id')
  async findMemberAdminById(@Param('id') id: number): Promise<MemberAdmin | undefined> {
    return this.memberAdminService.findMemberAdminById(id);
  }

  @Put(':id')
  async updateMemberAdmin(@Param('id') id: number, @Body() memberAdmin: MemberAdmin): Promise<MemberAdmin> {
    // return this.memberAdminService.updateMemberAdmin(id, memberAdmin);
    return this.memberAdminService.updateMemberAdmin(memberAdmin);
  }
}

