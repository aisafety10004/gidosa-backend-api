import { UrlConsts } from '@app/gidosa-common-api/constants/gidosa/UrlConsts';
import { GidosaAuthGuard } from '@app/gidosa-common/guards/gidosa.guard';
import { Body, Controller, Post, Get, UseGuards, Param, Put } from '@nestjs/common';
import { MemberGeneralService } from './member-general.service';
import { MemberGeneral } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberGeneral.entity';

@Controller(UrlConsts.PREFIX_V3_BASE + UrlConsts.PREFIX_WEBAPP_MEMBER_BASE)
@UseGuards(GidosaAuthGuard('access'))
export class MemberGeneralController {
  constructor(private readonly memberGeneralService: MemberGeneralService) {}

  @Post()
  async createMemberGeneral(@Body() memberGeneral: MemberGeneral): Promise<MemberGeneral> {
    return this.memberGeneralService.createMemberGeneral(memberGeneral);
  } 

  @Get()
  async findAllMemberGenerals(): Promise<MemberGeneral[]> {
    return this.memberGeneralService.findAllMemberGenerals();
  } 

  @Get(':id')
  async findMemberGeneralById(@Param('id') id: number): Promise<MemberGeneral | undefined> {
    return this.memberGeneralService.findMemberGeneralById(id);
  }

  @Put(':id')
  async updateMemberGeneral(@Param('id') id: number, @Body() memberGeneral: MemberGeneral): Promise<MemberGeneral> {
    return this.memberGeneralService.updateMemberGeneral(memberGeneral);
  } 
}

