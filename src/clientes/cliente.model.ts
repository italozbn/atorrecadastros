import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Cliente extends Model {
  @Column
  id_cliente : number
  @Column
  nome : string
  @Column
  sobrenome : string
  @Column
  endereco : string
  @Column
  bairro : string
  @Column
  numero : string
  @Column
  cidade : string
  @Column
  uf : string
  @Column
  estado : string
  @Column
  cep : string
  @Column
  cnpj_cpf : string
  }


