import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMboInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  mboCode: number;
}
