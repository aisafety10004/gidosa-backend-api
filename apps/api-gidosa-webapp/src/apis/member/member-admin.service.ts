import { BaseHttpErrorCode } from '@app/gidosa-common-api/constants/enums/BaseHttpErrorCode';
import { BaseHttpException } from '@app/gidosa-common-api/exceptions/BaseHttpException';
import { MemberAdmin } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberAdmin.entity';
import { MemberAdminRepository } from '@app/gidosa-rdb/repository/mysql/safety_gidosa/MemberAdminRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberAdminService {
  constructor(
    @InjectRepository(MemberAdmin)
    private readonly memberAdminRepository: MemberAdminRepository,
  ) {}

  async createMemberAdmin(memberAdmin: MemberAdmin): Promise<MemberAdmin> {
    return this.memberAdminRepository.save(memberAdmin);
  }

  async findAllMemberAdmins(): Promise<MemberAdmin[]> {
    return this.memberAdminRepository.find();
  }

  async findMemberAdminById(id: number): Promise<MemberAdmin | undefined> {
    return this.memberAdminRepository.findOne({ where: { id } });
  }

  async updateMemberAdmin(memberAdmin: MemberAdmin): Promise<MemberAdmin> {
    return this.memberAdminRepository.save(memberAdmin);
  }

  async deleteMemberAdmin(id: number): Promise<void> {
    await this.memberAdminRepository.delete(id);
  }
}

