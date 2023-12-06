import { executeServiceAction } from './../utils/rmqErrorHandler';
import { Controller, Logger } from '@nestjs/common';
import {  CreateUsuariosDto,  QueryUsuariosDto,  UpdateUsuariosDto,} from './usuarios.dto';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usaurios.model';
import {  Ctx,  EventPattern,  MessagePattern,  Payload,  RmqContext,} from '@nestjs/microservices';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}

  private readonly logger = new Logger(UsuariosController.name);

  @EventPattern('create-usuario')
  async create(
    @Payload() contato: CreateUsuariosDto,
    @Ctx() context: RmqContext,
  ): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.usuarioService.create(contato),
    );
  }

  @MessagePattern('get-usuarios')
  async findAll(@Payload() query: QueryUsuariosDto, @Ctx() context: RmqContext): Promise<Usuarios[]> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.usuarioService.findAll(query);
    } finally {
      await channel.ack(originalMessage);
    }
  }
  @MessagePattern('get-usuario')
  async findOne(@Payload() id: number, @Ctx() context: RmqContext): Promise<any> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      return await this.usuarioService.findOne(id);
    } finally {
      await channel.ack(originalMessage);
    }
  }

  @EventPattern('update-usuario')
  async update(@Payload('id') id: number,    @Payload('usuario') UpdateUsuariosDto: UpdateUsuariosDto,    @Ctx() context: RmqContext): Promise<any> {
    return await executeServiceAction(
      context,
      async () => await this.usuarioService.update(id, UpdateUsuariosDto),
    );
  }

  @EventPattern('delete-usuario')
  async remove(@Payload('id') id: number, @Ctx() context: RmqContext): Promise<void> {
    return await executeServiceAction(
      context,
      async () => await this.usuarioService.remove(id),
    );
  }
}
