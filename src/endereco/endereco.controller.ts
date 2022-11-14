import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) { }

  @Get()
  async findAll() {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  async findOneByOrFail(@Param('id') id: number) {
    let endereco;
    try {
      endereco = await this.enderecoService.findOne(+id);
    } catch {
      throw new HttpException(
        `Endereço com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return endereco;
  }
  
  @Post()
  async create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return await this.enderecoService.create(createEnderecoDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return await this.enderecoService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.enderecoService.remove(+id);
  }
}
