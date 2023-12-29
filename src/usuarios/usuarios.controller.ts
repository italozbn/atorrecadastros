import { Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly UsuariosService: UsuariosService) {}

    @Put()
    update(@Body() dados: any) {
      console.log(dados)
      let id = dados.id;
      return this.UsuariosService.update(id,dados);
    }

    @Get()
    async index() {
        return await this.UsuariosService.findAll();
    }

    @Post()
    async TrazUsuario(@Body() dados) {
        return await this.UsuariosService.TrazUsuario(dados);
    }
    @Post('/criar')
    async criarUsuario(@Body() dados) {
        return await this.UsuariosService.criar(dados);
    }


    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async destroy(@Param('id') id: number) {
        await this.UsuariosService.destroy(id);
    }

}
