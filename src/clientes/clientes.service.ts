import { Injectable,NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import {Clientes} from './entities/clientes.entity'
@Injectable()
export class ClientesService {
  constructor(
    @InjectDataSource() private readonly connection: DataSource,
    @InjectRepository(Clientes)
    private readonly Clientes: Repository<Clientes>,
  ) {}
  
  async TrazCliente(dados : number ) : Promise<any> {
      try {
        return await this.connection.query(`
        SELECT 
        id_cliente as id,
        nome,
        sobrenome,
        endereco,
        bairro,
        numero,
        cidade,
        uf,
        estado,
        cep,
        cnpj_cpf
        from cliente where id_cliente = ${dados}`);
      } catch (error) {
        throw new NotFoundException(error.message);
      }
      
    
  }
  async findAll() : Promise<any> {
      try {
            return await this.connection.query(`SELECT 
            id_cliente as id,
            nome,
            sobrenome,
            endereco,
            bairro,
            numero,
            cidade,
            uf,
            estado,
            cep,
            cnpj_cpf
            from cliente`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
  async destroy(idCliente : number) : Promise<any> {
      try {
            return await this.connection.query(`delete from cliente where id_cliente = ${idCliente}`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

  async update(id: number,dados : any ) : Promise<Boolean> {
    try {
      await this.connection.query(`update cliente set
      nome = '${dados.nome}',
      sobrenome = '${dados.sobrenome}',
      cnpj_cpf = '${dados.cnpj_cpf}'
       where id_cliente = ${id}`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
    
    
  }
  async criar(dados : any ) : Promise<any> {
    try {
      await this.connection.query(`insert into cliente (nome,sobrenome,endereco,bairro,numero,cidade,uf,estado,cep,cnpj_cpf) 
      values ('${dados.nome}','${dados.sobrenome}','${dados.endereco}','${dados.bairro}','${dados.numero}','${dados.cidade}','${dados.uf}',
      '${dados.estado}','${dados.cep}','${dados.cnpj_cpf}')`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
    
    
  }
}
