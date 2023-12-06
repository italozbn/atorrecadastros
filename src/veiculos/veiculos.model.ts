import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Veiculos extends Model {
 
  @Column
  id_veiculo : number
  @Column
  cliente : string
  @Column
  total_trac : string
  @Column
  categoria : string
  @Column
  carro : string
  @Column
  placa : string
  @Column
  marca : string
  @Column
  modelo : string
  @Column
  cor : string
  @Column
  ano : string
}

