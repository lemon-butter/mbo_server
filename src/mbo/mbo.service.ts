import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import DataLoader from 'dataloader';
import * as DataLoader from 'dataloader'
import { In, Repository } from 'typeorm';
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
    return this.mboRepository.find();
  }

  findOne(mboCode: number): Promise<Mbo> {
    return this.mboRepository.findOneBy({ mboCode });
  }

  async findFromMemberCode(memberCode: number) {
    console.log("memberCode", memberCode);
    // console.log('first');
    // return await this.mboRepository.findOneBy(memberCode);
    const kkk = this.mboRepository.findOneBy({memberCode});
    return kkk;

    // async function batchFunction(keys) {
    //   const results = await this.findFromMemberCodes(keys)
    //   return keys.map(key => results[key] || new Error(`No result for ${key}`))
    // }
    
    // const loader = new DataLoader(batchFunction)
    
    
    // const userLoader = new DataLoader(keys => batchFunction(keys));
    //  new DataLoader(
    //   (key) => {console.log(key)}
    // , {cache:false});

    // await loader.load(memberCode)

    // console.log(userLoader);

    // return userLoader.load(memberCode);

  }

  myBatchGetUsers = (keys:number[]) => {
    return new Promise((resolve, reject) => {});
  }

  public readonly batchAuthors = new DataLoader(async (authorIds: number[]) => {
    const users = await this.findFromMemberCodes(authorIds);

    
    // const usersMap = new Map(users.map(user => [user.mboCode, Mbo]));
    // console.log('usersMap', usersMap)
    console.log('authorIds', authorIds)

    return authorIds.map((memberCode) => users.filter(Mbo => Mbo.memberCode === memberCode))
    // return authorIds.map(memberCode => usersMap.get(memberCode));
    // return authorIds.map((memberCode) => users.filter(Mbo)=>Mbo.memberCode === authorIds));
  })

  async findFromMemberCodes(memberCodes: number[]): Promise<Mbo[]> {
    console.log("k22k2:", memberCodes)
    const kkk = await this.mboRepository.find({
      where:{
        memberCode:In(memberCodes)
      }
    });

    return kkk;
  }

  // findFromCodes(memberCodes: Number[]) {
  //   const kkk = this.mboRepository.find({
  //     where:{
  //       memberCode: In(memberCodes)
  //     }
  //   });
  //   console.log(kkk);
  //   return kkk;
  // }

  async update(mboCode: number, updateMboInput: UpdateMboInput) {
    await this.mboRepository.update(mboCode, updateMboInput);
    return this.findOne(updateMboInput.mboCode);
  }

  remove(id: number) {
    return `This action removes a #${id} mbo`;
  }
}
