import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuarios extends Model {
  @Column
  id_usuario : number
  @Column
  nome : string
  @Column
  sobrenome : string
  @Column
  cpf_cnpj : string
  @Column
  senha : string
}


