import { Module } from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import { ObjectivesResolver } from './objectives.resolver';
import { Objective } from './entities/objective.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Objective])],
  exports: [TypeOrmModule],
  providers: [ObjectivesResolver, ObjectivesService],
})
export class ObjectivesModule {}
