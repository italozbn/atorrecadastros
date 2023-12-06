import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Veiculos } from './veiculos.model';
import { RpcException } from '@nestjs/microservices';
@Injectable()
export class VeiculosService {
  constructor(
    @InjectModel(Veiculos)
    private VeiculosModel: typeof Veiculos,
  ) {}

  private readonly logger = new Logger(VeiculosService.name);
  async findAll(query): Promise<any[]> {
    try {
      console.log('query', query);
      return this.VeiculosModel.findAll({ where: query });
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      throw new RpcException(error.message);
    }
  }

  findOne(id: number): Promise<any> {
    try {
      return this.VeiculosModel.findOne({
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
      return await this.VeiculosModel.create(body);
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
