import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';
export class CreateVeiculosDto {
  
  @IsNotEmpty({ message: 'cliente cannot be empty' })
  cliente : number
  @IsNotEmpty({ message: 'total_trac cannot be empty' })
  total_trac : string
  @IsNotEmpty({ message: 'number cannot be empty' })
  categoria : string
  @IsNotEmpty({ message: 'carro cannot be empty' })
  carro : string
  @IsNotEmpty({ message: 'placa cannot be empty' })
  placa : string
  @IsNotEmpty({ message: 'marca cannot be empty' })
  marca : string
  @IsNotEmpty({ message: 'modelo cannot be empty' })
  modelo : string
  @IsNotEmpty({ message: 'cor cannot be empty' })
  cor : string
  @IsNotEmpty({ message: 'ano cannot be empty' })
  ano : string
}

export class UpdateVeiculosDto {
  
  

  @IsNotEmpty({ message: 'companyId cannot be empty' })
  id_veiculo: number;
}

export class QueryVeiculosDto {
  cliente: string;
  categoria: string;
  carro: string;
  placa: string;

  @IsNotEmpty({ message: 'companyId cannot be empty' })
  id_veiculo: number;
}




