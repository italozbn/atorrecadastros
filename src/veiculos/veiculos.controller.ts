import { Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
@Controller('veiculos')
export class VeiculosController {
    constructor(private readonly veiculosService: VeiculosService) {}

    @Put()
    update(@Body() dados: any) {
      console.log(dados)
      let id = dados.id;
      return this.veiculosService.update(id,dados);
    }

    @Get()
    async index() {
        return await this.veiculosService.findAll();
    }

    @Post()
    async TrazVeiculo(@Body() dados) {
        return await this.veiculosService.TrazVeiculo(dados);
    }
    @Post('/criar')
    async criarVeiculo(@Body() dados) {
        return await this.veiculosService.criar(dados);
    }


    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async destroy(@Param('id') id: number) {
        await this.veiculosService.destroy(id);
    }

}
