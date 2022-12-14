import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './config/ormconfig';
import { MboModule } from './mbo/mbo.module';
import { MemberModule } from './member/member.module';
import { Mbo } from './mbo/entities/mbo.entity';
import { ObjectivesModule } from './objectives/objectives.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import ormconfig from './config/ormconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    MboModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load:[ormconfig]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [join(__dirname, '/**/*.entity.js')],
        synchronize: true,
        logging:true
      }),
    }),
    MemberModule,
    ObjectivesModule,
    ToDoListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
