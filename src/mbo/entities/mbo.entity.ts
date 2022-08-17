import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum mboType {
  progress = 'progress',
  list = 'list',
}

@Entity()
@ObjectType()
export class Mbo {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'MBO 테이블 고유번호' })
  mboCode: number;

  // 멤버 성호 정범

  // MBO
  // 사용자 성호, 정범
  // 타입 progress, list
  // content = progress=진행률, list=json

  @Field(() => Int, { description: '사용자 코드' })
  @Column({
    type: 'int',
  })
  memberCode: number

  @Field(() => String, { description: 'mbo 타입(list, progress)' })
  @Column({
      type: 'enum',
      enum: mboType
  })
  mboType: string;

  @Field(() => String, { description: '본문' })
  @Column({
      type: 'text',
      nullable: true,
  })
  mboContent: string;

  @Field(() => String, { description: '작성일' })
  @Column({
      type: 'datetime',
      default: () => 'NOW()',
      nullable: true,
  })
  regDate: Date;
}
