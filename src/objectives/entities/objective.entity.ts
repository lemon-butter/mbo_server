import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Objective {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: '목표 번호' })
  objectiveCode: number;

  @Column()
  @Field(() => String, { description: '목표' })
  objectiveName: string;

  @Column({ default: 0 })
  @Field(() => Int, { description: '목표 진행률' })
  percentage: number;
}
