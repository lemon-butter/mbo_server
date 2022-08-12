import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateObjectiveInput {
  @Field(() => String, { description: '목표' })
  objectiveName: string;
}
