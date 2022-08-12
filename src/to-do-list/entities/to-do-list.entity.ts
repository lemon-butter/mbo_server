import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ToDoList {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: '할 일 번호' })
  toDoListCode: number;

  @Column()
  @Field(() => Int, { description: '목표 번호' })
  objectiveCode: number;

  @Column()
  @Field(() => String, { description: '할 일' })
  toDoThing: string;
}
