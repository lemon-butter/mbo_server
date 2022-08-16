import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateObjectiveInput {
  @Field(() => Int, { description: '사용자 정보' })
  userFlag: number;

  @Field(() => String, { description: '목표' })
  objectiveName: string;
}
