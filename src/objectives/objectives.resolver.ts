import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ObjectivesService } from './objectives.service';
import { Objective } from './entities/objective.entity';
import { CreateObjectiveInput } from './dto/create-objective.input';
import { UpdateObjectiveInput } from './dto/update-objective.input';
import { UpdateObjectNameInput } from './dto/update_objective_name.input';

@Resolver(() => Objective)
export class ObjectivesResolver {
  constructor(private readonly objectivesService: ObjectivesService) {}

  @Mutation(() => Objective)
  createObjective(
    @Args('createObjectiveInput') createObjectiveInput: CreateObjectiveInput,
  ) {
    return this.objectivesService.create(createObjectiveInput);
  }

  @Query(() => [Objective], { name: 'objectives' })
  findAll() {
    return this.objectivesService.findAll();
  }

  @Query(() => Objective, { name: 'objective' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.objectivesService.findOne(id);
  }

  @Mutation(() => Boolean)
  updateObjective(
    @Args('updateObjectNameInput') updateObjectNameInput: UpdateObjectNameInput,
  ) {
    return this.objectivesService.update(
      updateObjectNameInput.objectiveCode,
      updateObjectNameInput.objectiveName,
    );
  }

  @Mutation(() => Boolean)
  async removeObjective(@Args('id', { type: () => Int }) id: number) {
    // console.log('id:', id);
    const result = await this.objectivesService.remove(id);
    if (result.affected === 0) {
      return false;
    } else {
      return true;
    }
  }

  @Mutation(() => Boolean)
  increasePercentage(
    @Args('updateObjectiveInput') updateObjectiveInput: UpdateObjectiveInput,
  ) {
    return this.objectivesService.increasePer(
      updateObjectiveInput.objectiveCode,
    );
  }

  @Mutation(() => Boolean)
  decreasePercentage(
    @Args('updateObjectiveInput') updateObjectiveInput: UpdateObjectiveInput,
  ) {
    return this.objectivesService.decreasePer(
      updateObjectiveInput.objectiveCode,
    );
  }
}
