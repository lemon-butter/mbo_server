import { CreateToDoListInput } from './create-to-do-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateToDoListInput extends PartialType(CreateToDoListInput) {
  @Field(() => Int, { description: '할 일 번호' })
  toDoListCode: number;

  @Field(() => String, { description: '할 일' })
  toDoThing: string;
}
