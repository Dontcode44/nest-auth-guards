import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('My API documentation')
  .setDescription('A little aplication about JWT-GUARDS-TYPEORM-MYSQL and more...')
  .setVersion('1.0')
  .addTag('Users protected')
  .addTag('Register user')
  .addTag('Protected test')
  .addTag('Login with credentials')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, document);
  await app.listen(3000);
}
bootstrap();
