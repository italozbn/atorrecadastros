import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'cadastro_veiculo' })

export class Veiculo {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id_veiculo: number;
    @Column()
    cliente : string 
    @Column()
    total_trac : string 
    @Column()
    categoria : string 
    @Column()
    carro : string 
    @Column()
    placa : string 
    @Column()
    marca : string 
    @Column()
    modelo : string 
    @Column()
    cor : string 
    @Column()
    ano : string
}


