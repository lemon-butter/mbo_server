import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateToDoListInput {
  @Field(() => Int, { description: '목표 번호' })
  objectiveCode: number;
  @Field(() => String, { description: '할 일' })
  toDoThing: string;
}
