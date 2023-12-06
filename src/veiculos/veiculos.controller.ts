import { executeServiceAction } from './../utils/rmqErrorHandler';
import { Controller, Logger } from '@nestjs/common';
import {  CreateVeiculosDto,  UpdateVeiculosDto,  QueryVeiculosDto,} from './veiculos.dto';
import { VeiculosService } from './veiculos.service';
import { Veiculos } from './veiculos.model';
import {  Ctx,  EventPattern,  MessagePattern,  Payload,  RmqContext,} from '@nestjs/microservices';

@Controller('veiculos')
export class VeiculosController {
  constructor(private veiculosService: VeiculosService) {}

  private readonly logger = new Logger(VeiculosController.name);

  @EventPattern('create-veiculo')
  async create(
    @Payload() contato: CreateVeiculosDto,
    @Ctx() context: RmqContext,
  ): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.veiculosService.create(contato),
    );
  }

  @MessagePattern('get-veiculos')
  async findAll(@Payload() query: QueryVeiculosDto, @Ctx() context: RmqContext): Promise<Veiculos[]> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.veiculosService.findAll(query);
    } finally {
      await channel.ack(originalMessage);
    }
  }
  @MessagePattern('get-veiculo')
  async findOne(@Payload() id: number, @Ctx() context: RmqContext): Promise<any> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.veiculosService.findOne(id);
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @EventPattern('update-veiculo')
  async update(@Payload('id') id: number,    @Payload('veiculo') UpdateVeiculosDto: UpdateVeiculosDto,    @Ctx() context: RmqContext): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.veiculosService.update(id, UpdateVeiculosDto),
    );
  }

  @EventPattern('delete-veiculo')
  async remove(@Payload('id') id: number, @Ctx() context: RmqContext): Promise<void> {
    return await executeServiceAction(
      context,
      async () => await this.veiculosService.remove(id),
    );
  }
}
