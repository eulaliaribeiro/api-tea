import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexEnderecoSwagger } from 'src/swagger/index-endereco.swagger';
import { PaginationQueryDto } from 'src/beneficiario/dto/pagination-query.dto';


@Controller('enderecos')
@ApiTags('Classe-Endereço')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) { }

  @Get()
  @ApiOperation({ summary: 'Listar todos os endereços'})
  @ApiResponse({ status: 200, description: 'Lista de endereço retornada com sucesso!', 
  type: IndexEnderecoSwagger})
  async findAll(@Query() pagination: PaginationQueryDto) {
    return this.enderecoService.findAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar o endereço pelo id'})
  @ApiResponse({ status: 200, description: 'Dados de um endereço retornado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Endereço não foi encontrado', type: IndexEnderecoSwagger})
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
  @ApiOperation({ summary: 'Cadastrar um novo endereço'})
  @ApiResponse({ status: 201, description: 'Novo endereço criado com sucesso!'})
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos', type: IndexEnderecoSwagger})
  async create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return await this.enderecoService.create(createEnderecoDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar o endereço do beneficiario pelo id'})
  @ApiResponse({ status: 200, description: 'Endereço atualizado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Endereço não encontrado', type: IndexEnderecoSwagger})
  async update(@Param('id') id: number, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return await this.enderecoService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar endereço do beneficiario pelo id'})
  @ApiResponse({ status: 204, description: 'Endereço removido com sucesso!'})
  @ApiResponse({ status: 404, description: 'Endereço não encontrado', type: IndexEnderecoSwagger})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.enderecoService.remove(+id);
  }
}
