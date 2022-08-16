import { CreateObjectiveInput } from './create-objective.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateObjectiveInput extends PartialType(CreateObjectiveInput) {
  @Field(() => Int, { description: '목표 번호' })
  objectiveCode: number;
}
