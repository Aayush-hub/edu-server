import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig, customOptions } from './swagger-ui';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup swagger-ui
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, customOptions);

  app.enableCors();
  await app.listen(5000);
  console.log('App is listening on port: 5000');
}

bootstrap();
