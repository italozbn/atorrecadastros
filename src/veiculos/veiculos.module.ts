import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Veiculos } from './veiculos.model';
import { VeiculosController } from './veiculos.controller';
import { VeiculosService } from './veiculos.service';

@Module({
  imports: [SequelizeModule.forFeature([Veiculos])],
  exports: [SequelizeModule],
  providers: [VeiculosService],
  controllers: [VeiculosController],
})
export class VeiculosModule {}
