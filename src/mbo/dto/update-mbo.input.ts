import { CreateMboInput } from './create-mbo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMboInput extends PartialType(CreateMboInput) {
  @Field(() => Int)
  id: number;
}
