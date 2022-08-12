import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { ToDoList } from './entities/to-do-list.entity';

@Injectable()
export class ToDoListService {
  constructor(
    @InjectRepository(ToDoList)
    private toDoListRepository: Repository<ToDoList>,
  ) {}

  async create(createToDoListInput: CreateToDoListInput) {
    const result = await this.toDoListRepository.save({
      ...createToDoListInput,
    });

    return result;
  }

  findAll() {
    return `This action returns all toDoList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toDoList`;
  }

  update(id: number, updateToDoListInput: UpdateToDoListInput) {
    return `This action updates a #${id} toDoList`;
  }

  remove(toDoListCode: number): Promise<DeleteResult> {
    return this.toDoListRepository.delete(toDoListCode);
  }

  findPartList(objectiveCode: number) {
    // console.log('service: ', objectiveCode);
    return this.toDoListRepository.find({
      where: { objectiveCode: objectiveCode },
    });
  }
}
