import { ObjectType, Field, Int } from '@nestjs/graphql';
import { json } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Mbo {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  mboCode: number;

  // 멤버 성호 정범

  // MBO
  // 사용자 성호, 정범
  // 타입 progress, list
  // content = progress=진행률, list=json

  @Field(() => Int, { description: '사용자 코드' })
  @Column({
    comment: '사용자 코드',
    type: 'varchar',
  })
  memberCode: number;
}
