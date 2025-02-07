import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
    comment: 'PK 값',
  })
  id: number;

  @CreateDateColumn({
    // type: 'timestamp',
    nullable: false,
    comment: '생성시간',
  })
  created_at: Date;

  @UpdateDateColumn({
    // type: 'timestamp',
    nullable: false,
    comment: '수정시간',
  })
  updated_at: Date;
}
