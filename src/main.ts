import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.enableCors({
    "origin": "http://localhost:4200",
    "methods": 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    "credentials": true,
    "allowedHeaders": ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', ' Content', ' Accept'],

  });
  const port = process.env.PORT || '3000';
  await app.listen(port);
}

bootstrap();
