import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('member')
export class MemberController {
  constructor() {}

  @Post()
  //async createMember(@Body() createMemberDto: CreateMemberDto) {
	async createMember(@Body() memberStr: string) {
    return 'This action adds a new member';
  }
}
