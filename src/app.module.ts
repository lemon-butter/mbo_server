import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import ormconfig from './config/ormconfig';
import { MboModule } from './mbo/mbo.module';
import { MemberModule } from './member/member.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
