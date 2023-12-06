import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';
export class CreateUsuariosDto {
  @IsNotEmpty({ message: 'nome cannot be empty' })
  nome : string
  @IsNotEmpty({ message: 'sobrenome cannot be empty' })
  sobrenome : string
  @IsNotEmpty({ message: 'cpf_cnpj cannot be empty' })
  cpf_cnpj : string
  @IsNotEmpty({ message: 'senha cannot be empty' })
  senha : string

}

export class UpdateUsuariosDto {
  nome: string;
  sobrenome: string;
  cpf_cnpj: string;


  @IsNotEmpty({ message: 'companyId cannot be empty' })
  id_usuario: number;
}

export class QueryUsuariosDto {
  nome: string;
  sobrenome: string;
  cpf_cnpj: string;


  @IsNotEmpty({ message: 'companyId cannot be empty' })
  id_usuario: number;
}


