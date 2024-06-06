import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import Jobs from './cron';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Jobs.initialize();
}
bootstrap();
