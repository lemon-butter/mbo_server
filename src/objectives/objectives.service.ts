import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateObjectiveInput } from './dto/create-objective.input';
import { Objective } from './entities/objective.entity';

@Injectable()
export class ObjectivesService {
  constructor(
    @InjectRepository(Objective)
    private objectiveRepository: Repository<Objective>,
  ) {}

  async create(createObjectiveInput: CreateObjectiveInput) {
    const result = await this.objectiveRepository.save({
      ...createObjectiveInput,
    });

    return result;
  }

  findAll() {
    return this.objectiveRepository.find();
  }

  findOne(objectiveCode: number) {
    return this.objectiveRepository.findOneBy({ objectiveCode });
  }

  async update(objectiveCode: number, objectiveName: string) {
    const result = await this.objectiveRepository.update(objectiveCode, {
      objectiveName: objectiveName,
    });
    if (result.affected === 0) {
      return false;
    } else {
      return true;
    }
  }

  remove(objectiveCode: number): Promise<DeleteResult> {
    return this.objectiveRepository.delete(objectiveCode);
  }

  async increasePer(objectiveCode: number) {
    console.log('objectiveCode: ', objectiveCode);

    const result = this.findOne(objectiveCode);

    const ent = { percentage: (await result).percentage + 1 };

    const response = await this.objectiveRepository.update(
      { objectiveCode },
      ent,
    );
    if (response.affected === 0) {
      return false;
    } else {
      return true;
    }
  }

  async decreasePer(objectiveCode: number) {
    console.log('objectiveCode: ', objectiveCode);

    const result = this.findOne(objectiveCode);

    const ent = { percentage: (await result).percentage - 1 };

    const response = await this.objectiveRepository.update(
      { objectiveCode },
      ent,
    );
    if (response.affected === 0) {
      return false;
    } else {
      return true;
    }
  }
}
