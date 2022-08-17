import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { MboService } from 'src/mbo/mbo.service';
import { Mbo } from 'src/mbo/entities/mbo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Mbo])],
  exports: [TypeOrmModule],
  providers: [MemberResolver, MemberService, MboService]
})
export class MemberModule {}
