import { Module } from '@nestjs/common';
import { MboService } from './mbo.service';
import { MboResolver } from './mbo.resolver';
import { Mbo } from './entities/mbo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mbo])],
  exports: [TypeOrmModule],
  providers: [MboResolver, MboService],
})
export class MboModule {}
