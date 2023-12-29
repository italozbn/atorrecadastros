import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { resolve } from "path";

import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesModule } from './clientes/clientes.module';
import { VeiculosService } from './veiculos/veiculos.service';
import { VeiculosModule } from './veiculos/veiculos.module';

const dotenv = require('dotenv');

dotenv.config({ path: "src/.env" })

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'admin',
        password: '$$At0rr3Controle',
        database: 'torre',
        logging: true,
        extra: {
          trustServerCertificate: true,
        },
        synchronize: true,
      }),
    }),
    UsuariosModule,
    ClientesModule,
    VeiculosModule

    
    // PerfilAcessoModule,
    // ContatoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
