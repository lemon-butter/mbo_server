import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMboInput } from './dto/create-mbo.input';
import { UpdateMboInput } from './dto/update-mbo.input';
import { Mbo } from './entities/mbo.entity';

@Injectable()
export class MboService {
  constructor(@InjectRepository(Mbo) private mboRepository: Repository<Mbo>) {}
  async create(createMboInput: CreateMboInput) {
    await this.mboRepository.save(createMboInput);
    console.log(createMboInput);
    return this.findOne(createMboInput.mboCode);
  }

  findAll() {
    return `This action returns all mbo`;
  }

  findOne(mboCode: number): Promise<Mbo> {
    return this.mboRepository.findOneBy({ mboCode });
  }

  async update(mboCode: number, updateMboInput: UpdateMboInput) {
    await this.mboRepository.update(mboCode, updateMboInput);
    return this.findOne(updateMboInput.mboCode);
  }

  remove(id: number) {
    return `This action removes a #${id} mbo`;
  }
}
