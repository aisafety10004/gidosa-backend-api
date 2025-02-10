import { MemberAdmin } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberAdmin.entity';
import { Repository } from 'typeorm';

export interface MemberAdminRepository extends Repository<MemberAdmin> {}