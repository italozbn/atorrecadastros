import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cliente } from './cliente.model';
import { RpcException } from '@nestjs/microservices';
@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente)
    private ClienteModel: typeof Cliente,
  ) {}

  private readonly logger = new Logger(ClienteService.name);
  async findAll(query): Promise<any[]> {
    try {
      console.log('query', query);
      return this.ClienteModel.findAll({ where: query });
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  findOne(id: number): Promise<any> {
    try {
      return this.ClienteModel.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  async create(body): Promise<any> {
    try {
      return await this.ClienteModel.create(body);
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

  async update(id: number, body): Promise<any> {
    try {
      const contact = await this.findOne(id);
      return await contact.update(body);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }
}
