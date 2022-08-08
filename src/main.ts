import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4001);
}
bootstrap();
git config --global user.email "kim1231401@naver.com"
git config --global user.name "lemon-butter"