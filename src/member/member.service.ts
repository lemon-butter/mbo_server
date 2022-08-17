import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(@InjectRepository(Member) private memberRepository: Repository<Member>) {
  }

  async create(member: Member): Promise<void> {
    await this.memberRepository.save(member);
  }

  findAll() {
    return this.memberRepository.find();
  }

  findOne(memberCode: number) {
    const kkk = this.memberRepository.findOneBy({memberCode});
    console.log(kkk);
    return kkk;
  }
  
  findFromName(memberName: string) {
    const kkk = this.memberRepository.find({
      where:{
        memberName:memberName
      }
    });
    console.log(kkk);
    return kkk;
  }
  
  findFromCodes(memberCodes: String[]) {
    const kkk = this.memberRepository.find({
      where:{
        memberCode: In(memberCodes)
      }
    });
    console.log(kkk);
    return kkk;
  }

  async update(memberCode: number, member: Member): Promise<void> {
    console.log("#1234");
    await this.memberRepository.update(memberCode, member);
  }

  async remove(memberCode: number): Promise<void> {
    await this.memberRepository.delete(memberCode);
  }
}
