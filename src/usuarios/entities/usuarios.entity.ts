import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'usuario' })

export class Usuarios {
    @PrimaryGeneratedColumn()
    id_usuario: number;
    @Column()
    nome: string;
    @Column()
    sobrenome: string;
    @Column()
    cpf_cnpj: string;
    @Column()
    senha: string;
    
    
}
