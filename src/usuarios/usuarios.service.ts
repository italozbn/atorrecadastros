import { Injectable,NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import {Usuarios} from './entities/usuarios.entity'
@Injectable()
export class UsuariosService {
  constructor(
    @InjectDataSource() private readonly connection: DataSource,
    @InjectRepository(Usuarios)
    private readonly Usuarios: Repository<Usuarios>,
  ) {}
  
  async TrazUsuario(dados : number ) : Promise<any> {
      try {
        return await this.connection.query(`
        SELECT 
        id_usuario as id,
        nome,
        sobrenome,
        senha,
        cpf_cnpj
        from usuario where id_usuario = ${dados}`);
      } catch (error) {
        throw new NotFoundException(error.message);
      }
      
    
  }
  async findAll() : Promise<any> {
      try {
            return await this.connection.query(`SELECT 
            id_usuario as id,
            nome,
            sobrenome,
            senha,
            cpf_cnpj
            from usuario`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
  async destroy(idUsuario : number) : Promise<any> {
      try {
            return await this.connection.query(`delete from usuario where id_usuario = ${idUsuario}`);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

  async update(id: number,dados : any ) : Promise<Boolean> {
    try {
      await this.connection.query(`update usuario set
      nome = '${dados.nome}',
      sobrenome = '${dados.sobrenome}',
      cpf_cnpj = '${dados.cpf_cnpj}'
       where id_usuario = ${id}`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
    
    
  }
  async criar(dados : any ) : Promise<any> {
    try {
      await this.connection.query(`insert into usuario (nome,sobrenome,cpf_cnpj,senha) values(
        '${dados.nome}',
        '${dados.sobrenome}',
        '${dados.cpf_cnpj}',
        '${dados.senha}'

  )`);//atualiza a semaforo_teltonika
      return true
    } catch (error) {
      return true
    }
    
    
  }
}
