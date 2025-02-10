import { MemberGeneral } from '@app/gidosa-rdb/models/entities/dbs/mysql/MemberGeneral.entity';
import { Repository } from 'typeorm';

export interface MemberGeneralRepository extends Repository<MemberGeneral> {}