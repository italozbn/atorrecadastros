import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes } from './entities/clientes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes])],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesService]
})
export class ClientesModule {}
