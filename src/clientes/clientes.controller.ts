import { executeServiceAction } from './../utils/rmqErrorHandler';
import { Controller, Logger } from '@nestjs/common';
import {  CreateClienteDto,  UpdateClienteDto,  QueryClienteDto,} from './contact.dto';
import { ClienteService } from './clientes.service';
import { Cliente } from './cliente.model';
import {  Ctx,  EventPattern,  MessagePattern,  Payload,  RmqContext,} from '@nestjs/microservices';

@Controller('clientes')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  private readonly logger = new Logger(ClienteController.name);

  @EventPattern('create-cliente')
  async create(
    @Payload() contato: CreateClienteDto,
    @Ctx() context: RmqContext,
  ): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.clienteService.create(contato),
    );
  }

  @MessagePattern('get-clientes')
  async findAll(@Payload() query: QueryClienteDto, @Ctx() context: RmqContext): Promise<Cliente[]> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.clienteService.findAll(query);
    } finally {
      await channel.ack(originalMessage);
    }
  }
  @MessagePattern('get-cliente')
  async findOne(@Payload() id: number, @Ctx() context: RmqContext): Promise<any> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.clienteService.findOne(id);
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @EventPattern('update-cliente')
  async update(@Payload('id') id: number,    @Payload('cliente') UpdateClienteDto: UpdateClienteDto,    @Ctx() context: RmqContext): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.clienteService.update(id, UpdateClienteDto),
    );
  }

  @EventPattern('delete-cliente')
  async remove(@Payload('id') id: number, @Ctx() context: RmqContext): Promise<void> {
    return await executeServiceAction(
      context,
      async () => await this.clienteService.remove(id),
    );
  }
}
