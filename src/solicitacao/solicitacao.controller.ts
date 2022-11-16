import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexSolicitacaoSwagger } from 'src/swagger/index-solicitacao.swagger';
import { PaginationQueryDto } from 'src/beneficiario/dto/pagination-query.dto';


@Controller('solicitacoes')
@ApiTags('Classe-Solicitação')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) { }

  @Get()
  @ApiOperation({ summary: 'Listar todos as solicitações'})
  @ApiResponse({ status: 200, description: 'Lista de solicitações retornada com sucesso!', 
  type: IndexSolicitacaoSwagger})
  async findAll(@Query() pagination: PaginationQueryDto) {
    return this.solicitacaoService.findAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar a solicitação pelo id'})
  @ApiResponse({ status: 200, description: 'Dados de uma solicitação retornados com sucesso!'})
  @ApiResponse({ status: 404, description: 'Solicitação não foi encontrada', type: IndexSolicitacaoSwagger})
  async findOneByOrFail(@Param('id') id: number) {
    let solicitacao;
    try {
      solicitacao = await this.solicitacaoService.findOne(+id);
    } catch {
      throw new HttpException(
        `Solicitação com id ${id} não encontrada`,
        HttpStatus.NOT_FOUND,
      );
    }
    return solicitacao;
  }
  
  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo endereço'})
  @ApiResponse({ status: 201, description: 'Novo endereço criado com sucesso!'})
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos', type: IndexSolicitacaoSwagger})
  async create(@Body() createSolicitacaoDto: CreateSolicitacaoDto) {
    return await this.solicitacaoService.create(createSolicitacaoDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar a solicitação do beneficiário pelo id'})
  @ApiResponse({ status: 200, description: 'Solicitação atualizada com sucesso!'})
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada', type: IndexSolicitacaoSwagger})
  async update(@Param('id') id: number, @Body() updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return await this.solicitacaoService.update(+id, updateSolicitacaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar solicitação do beneficiario pelo id'})
  @ApiResponse({ status: 204, description: 'Solicitação removida com sucesso!'})
  @ApiResponse({ status: 404, description: 'Solicitaçao não encontrada', type: IndexSolicitacaoSwagger})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.solicitacaoService.remove(+id);
  }
}
