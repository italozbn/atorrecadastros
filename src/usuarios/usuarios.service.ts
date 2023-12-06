import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from './usaurios.model';
import { RpcException } from '@nestjs/microservices';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuarios)
    private usuariosModel: typeof Usuarios,
  ) {}

  private readonly logger = new Logger(UsuariosService.name);
  async findAll(query): Promise<Usuarios[]> {
    try {
      console.log('query', query);
      return this.usuariosModel.findAll({ where: query });
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  findOne(id: number): Promise<Usuarios> {
    try {
      return this.usuariosModel.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  async create(body): Promise<Usuarios> {
    try {
      return await this.usuariosModel.create(body);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const contact = await this.findOne(id);
      return await contact.destroy();
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  async update(id: number, body): Promise<Usuarios> {
    try {
      const contact = await this.findOne(id);
      return await contact.update(body);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }
}
