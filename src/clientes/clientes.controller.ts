import { Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { ClientesService } from './clientes.service';
@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @Put()
    update(@Body() dados: any) {
      console.log(dados)
      let id = dados.id;
      return this.clientesService.update(id,dados);
    }

    @Get()
    async index() {
        return await this.clientesService.findAll();
    }

    @Post()
    async TrazCliente(@Body() dados) {
        return await this.clientesService.TrazCliente(dados);
    }
    @Post('/criar')
    async criarCliente(@Body() dados) {
        return await this.clientesService.criar(dados);
    }


    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async destroy(@Param('id') id: number) {
        await this.clientesService.destroy(id);
    }

}
