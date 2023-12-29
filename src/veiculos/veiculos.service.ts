import { Injectable,NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import {Veiculo} from './entities/veiculos.entity'
@Injectable()
export class VeiculosService {
  constructor(
    @InjectDataSource() private readonly connection: DataSource,
    @InjectRepository(Veiculo)
    private readonly veiculos: Repository<Veiculo>,
  ) {}
  
  async TrazVeiculo(dados : number ) : Promise<any> {
      try {
        return await this.connection.query(`
        SELECT 
        id_veiculo as id,
        cliente,
        categoria,
        placa,
        marca,
        modelo,
        cor,
        ano
        from cadastro_veiculo where id_veiculo = ${dados}`);
      } catch (error) {
        throw new NotFoundException(error.message);
      }
      
    
  }
  async findAll() : Promise<any> {
      try {
            return await this.connection.query(`SELECT 
            id_veiculo as id,
            cliente,
            categoria,
            placa,
            marca,
            modelo,
            cor,
            ano
            from cadastro_veiculo`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
  async destroy(idVeiculo : number) : Promise<any> {
      try {
            return await this.connection.query(`delete from cadastro_veiculo where id_veiculo = ${idVeiculo}`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

  async update(id: number,dados : any ) : Promise<Boolean> {
    try {
      await this.connection.query(`update cadastro_veiculo set
      cliente = '${dados.cliente}',
      categoria = '${dados.categoria}',
      placa = '${dados.placa}',
      marca = '${dados.marca}',
      modelo = '${dados.modelo}',
      cor = '${dados.cor}',
      ano = '${dados.ano}'
     where id_veiculo = ${id}`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
  }
  async criar(dados : any ) : Promise<any> {
    try {
      await this.connection.query(`insert into cadastro_veiculo (cliente,categoria,placa,marca,modelo,cor,ano) values ('${dados.cliente}','${dados.categoria}','${dados.placa}','${dados.marca}','${dados.modelo}','${dados.cor}','${dados.ano}')`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
  }




}
