import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base/Base.entity';
import { MemberUserAuthority } from '@app/gidosa-rdb/constants/enums/MemberGeneralAuthority.enum';
import { MemberGeneralProvider } from '@app/gidosa-rdb/constants/enums/MemberGeneralProvider.enum';

@Entity({
  synchronize: true,  // default: true
  //schema: 'users',
  //schema: 'safety_gidosa',
  name: 'member_general',
  comment: '일반 회원 테이블',
})
export class MemberGeneral extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
    comment: '회원 로그인 ID (사용 이메일)',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    comment: '회원 로그인 PW',
  })
  password: string;

  @Column({
    type: 'enum',
    enum: MemberUserAuthority,
    nullable: false,
    comment: '회원 JWT 권한종류',
  })
  authority: MemberUserAuthority;
  
  @Column({
    type: 'enum',
    enum: MemberGeneralProvider,
    nullable: false,
    comment: 'SNS 로그인 회사',
  })
  provider: MemberGeneralProvider;

  @Column({
    type: 'varchar',
    length: 17,
    nullable: false,
    comment: '회원 이름',
  })
  name: string;

  // @Column({
  //   type: 'varchar',
  //   length: 10,
  //   unique: true,
  //   comment: '회원 별명',
  // })
  // nick_name: string;

  // @Column({
  //   type: 'varchar',
  //   length: 13,
  //   nullable: false,
  //   comment: '회원 전화번호',
  // })
  // phone: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
    comment: '회원 점수(point)',
  })
  score: number;

  @Column({
    // type: 'timestamp',
    comment: '로그인 시간',
  })
  login_at: Date;

  @Column({ type: 'boolean', default: false, comment: '회원탈퇴 여부' })
  is_deleted: boolean;
}