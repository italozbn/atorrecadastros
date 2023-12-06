import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST || 'database',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'atorre',
      password: process.env.DATABASE_PASSWORD || 'w2r4y6i8',
      database: process.env.DATABASENAME || 'atorre-dev',
      synchronize: true,
    }),
    ClientesModule,
    VeiculosModule,
    UsuariosModule,
  ],
  providers: [],
})
export class AppModule {}
