import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { Veiculo } from './entities/veiculos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo])],
  controllers: [VeiculosController],
  providers: [VeiculosService],
  exports: [VeiculosService]
})
export class VeiculosModule {}
