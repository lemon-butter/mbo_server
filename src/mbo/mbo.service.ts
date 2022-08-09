import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMboInput } from './dto/create-mbo.input';
import { UpdateMboInput } from './dto/update-mbo.input';
import { Mbo } from './entities/mbo.entity';

@Injectable()
export class MboService {
  constructor(@InjectRepository(Mbo) private mboRepository: Repository<Mbo>) {}
  create(createMboInput: CreateMboInput) {
    return 'This action adds a new mbo';
  }

  findAll() {
    return `This action returns all mbo`;
  }

  findOne(exampleField: number): Promise<Mbo> {
    return this.mboRepository.findOneBy({ exampleField });
  }

  update(id: number, updateMboInput: UpdateMboInput) {
    return `This action updates a #${id} mbo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mbo`;
  }
}
