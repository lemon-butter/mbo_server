import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Mbo } from 'src/mbo/entities/mbo.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: '사용자 테이블 고유번호' })
  memberCode: number;

  @Field(() => String, { description: '사용자 이름' })
  @Column({
      type: 'varchar',
      length: 20,
  })
  memberName: string;

  @Field(type => [Mbo])
  mbos: Mbo[];
}
