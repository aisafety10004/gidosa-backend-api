import { BaseHttpErrorCode } from '@app/gidosa-common-api/constants/enums/BaseHttpErrorCode';
import { BaseHttpException } from '@app/gidosa-common-api/exceptions/BaseHttpException';
import { MemberGeneral } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberGeneral.entity';
import { MemberGeneralRepository } from '@app/gidosa-rdb/repository/mysql/safety_gidosa/MemberGeneralRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberGeneralService {
  constructor(
    @InjectRepository(MemberGeneral)
    private readonly memberGeneralRepository: MemberGeneralRepository,
  ) {}

  async createMemberGeneral(memberGeneral: MemberGeneral): Promise<MemberGeneral> {
    return this.memberGeneralRepository.save(memberGeneral);
  }

  async findAllMemberGenerals(): Promise<MemberGeneral[]> {
    return this.memberGeneralRepository.find();
  }   

  async findMemberGeneralById(id: number): Promise<MemberGeneral | undefined> {
    return this.memberGeneralRepository.findOne({ where: { id } });
  }

  async updateMemberGeneral(memberGeneral: MemberGeneral): Promise<MemberGeneral> {
    return this.memberGeneralRepository.save(memberGeneral);
  }
}
