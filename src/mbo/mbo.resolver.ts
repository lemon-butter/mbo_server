import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MboService } from './mbo.service';
import { Mbo } from './entities/mbo.entity';
import { CreateMboInput } from './dto/create-mbo.input';
import { UpdateMboInput } from './dto/update-mbo.input';

@Resolver(() => Mbo)
export class MboResolver {
  constructor(private readonly mboService: MboService) {}

  @Mutation(() => Mbo)
  createMbo(@Args('createMboInput') createMboInput: CreateMboInput) {
    return this.mboService.create(createMboInput);
  }

  @Query(() => [Mbo], { name: 'mbo' })
  findAll() {
    return this.mboService.findAll();
  }

  @Query(() => Mbo, { name: 'mbo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mboService.findOne(id);
  }

  @Mutation(() => Mbo)
  updateMbo(@Args('updateMboInput') updateMboInput: UpdateMboInput) {
    return this.mboService.update(updateMboInput.mboCode, updateMboInput);
  }

  @Mutation(() => Mbo)
  removeMbo(@Args('id', { type: () => Int }) id: number) {
    return this.mboService.remove(id);
  }
}
