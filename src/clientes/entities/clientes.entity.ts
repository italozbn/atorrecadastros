import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'cliente' })

export class Clientes {
    @PrimaryGeneratedColumn()
    id_cliente: number;
    @Column()
    nome : string
    @Column()
    sobrenome : string
    @Column()
    endereco : string
    @Column()
    bairro : string
    @Column()
    numero : string
    @Column()
    cidade : string
    @Column()
    uf : string
    @Column()
    estado : string
    @Column()
    cep : string
    @Column()
    cnpj_cpf : string
    
}


