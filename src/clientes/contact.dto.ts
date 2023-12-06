import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';
export class CreateClienteDto {
  @IsNotEmpty({ message: 'nome cannot be empty' })
  nome : string
  @IsNotEmpty({ message: 'sobrenome cannot be empty' })
  sobrenome : string
  @IsNotEmpty({ message: 'endereco cannot be empty' })
  endereco : string
  @IsNotEmpty({ message: 'bairro cannot be empty' })
  bairro : string
  @IsNotEmpty({ message: 'numero cannot be empty' })
  numero : string
  @IsNotEmpty({ message: 'cidade cannot be empty' })
  cidade : string
  @IsNotEmpty({ message: 'uf cannot be empty' })
  uf : string
  @IsNotEmpty({ message: 'estado cannot be empty' })
  estado : string
  @IsNotEmpty({ message: 'cep cannot be empty' })
  cep : string
  @IsNotEmpty({ message: 'cnpj_cpf cannot be empty' })
  cnpj_cpf : string
}

export class UpdateClienteDto {
  @IsNotEmpty({ message: 'nome cannot be empty' })
  nome : string
  @IsNotEmpty({ message: 'sobrenome cannot be empty' })
  sobrenome : string
  @IsNotEmpty({ message: 'endereco cannot be empty' })
  endereco : string
  @IsNotEmpty({ message: 'bairro cannot be empty' })
  bairro : string
  @IsNotEmpty({ message: 'numero cannot be empty' })
  numero : string
  @IsNotEmpty({ message: 'cidade cannot be empty' })
  cidade : string
  @IsNotEmpty({ message: 'uf cannot be empty' })
  uf : string
  @IsNotEmpty({ message: 'estado cannot be empty' })
  estado : string
  @IsNotEmpty({ message: 'cep cannot be empty' })
  cep : string
  @IsNotEmpty({ message: 'cnpj_cpf cannot be empty' })
  cnpj_cpf : string
}

export class QueryClienteDto {
  nome : string
  sobrenome : string
  endereco : string
  bairro : string
  numero : string
  cidade : string
  uf : string
  estado : string
  cep : string
  cnpj_cpf : string

  @IsNotEmpty({ message: 'id_cliente cannot be empty' })
  id_cliente : number
}


