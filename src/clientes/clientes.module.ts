import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from './cliente.model';
import { ClienteController } from './clientes.controller';
import { ClienteService } from './clientes.service';

@Module({
  imports: [SequelizeModule.forFeature([Cliente])],
  exports: [SequelizeModule],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClientesModule {}
