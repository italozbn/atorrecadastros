import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
const formatRabbitUrl = (host, port, user, password) => {
  return `amqp://${user}:${password}@${host}:${port}`;
};
const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        formatRabbitUrl(
          process.env.RABBITMQ_HOST || 'rabbitmq',
          process.env.RABBITMQ_PORT || '5672',
          process.env.RABBITMQ_USER || 'guest',
          process.env.RABBITMQ_PASSWORD || 'guest',
        ),
      ],
      noAck: false,
      queue: process.env.RABBITMQ_QUEUE || 'portal-cadastros',
    },
  });

  await app.listen().then(() => logger.log('Microservice is listening'));
}
bootstrap();
