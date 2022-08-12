import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ToDoListService } from './to-do-list.service';
import { ToDoList } from './entities/to-do-list.entity';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';

@Resolver(() => ToDoList)
export class ToDoListResolver {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Mutation(() => ToDoList)
  createToDoList(
    @Args('createToDoListInput') createToDoListInput: CreateToDoListInput,
  ) {
    return this.toDoListService.create(createToDoListInput);
  }

  @Query(() => [ToDoList], { name: 'toDoList' })
  findAll() {
    return this.toDoListService.findAll();
  }

  @Query(() => ToDoList, { name: 'toDoThing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.toDoListService.findOne(id);
  }

  @Mutation(() => Boolean)
  updateToDoList(
    @Args('updateToDoListInput') updateToDoListInput: UpdateToDoListInput,
  ) {
    return this.toDoListService.update(
      updateToDoListInput.toDoListCode,
      updateToDoListInput.toDoThing,
    );
  }

  @Mutation(() => Boolean)
  async removeToDoList(@Args('id', { type: () => Int }) id: number) {
    const result = await this.toDoListService.remove(id);
    if (result.affected === 0) {
      return false;
    } else {
      return true;
    }
  }

  @Query(() => [ToDoList], { name: 'partList' })
  findBy(@Args('id', { type: () => Int }) id: number) {
    return this.toDoListService.findPartList(id);
  }
}
