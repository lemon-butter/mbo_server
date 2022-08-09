import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MboModule } from './mbo/mbo.module';
import { Mbo } from './mbo/entities/mbo.entity';

@Module({
  imports: [
    MboModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '915502',
      database: 'onesoul',
      entities: [Mbo],
      synchronize: true, // 배포시에는 컬럼값수정등을 하게될경우 데이터가 날아가므로 배포환경에서는 false
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
