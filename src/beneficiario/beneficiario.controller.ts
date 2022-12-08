import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers-swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers-swagger/not-found.swagger';
import { CreateBeneficiarioSwagger } from 'src/swagger/create-beneficiario.swagger';
import { IndexBeneficiarioSwagger } from 'src/swagger/index-Beneficiario.swagger';
import { ShowBeneficiarioSwagger } from 'src/swagger/show-beneficiario.swagger';
import { UpdateBeneficiarioSwagger } from 'src/swagger/update-beneficiario.swagger';
import { BeneficiarioService } from './beneficiario.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@Controller('beneficiarios')
@ApiTags('Classe-Beneficiario')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) { }

  @Get()
  @ApiOperation({ summary: 'Listar de todos os beneficiarios'})
  @ApiResponse({ status: 200, description: 'Lista de beneficiario retornada com sucesso!',type: IndexBeneficiarioSwagger})
  async findAll(@Query() pagination: PaginationQueryDto) {
    return this.beneficiarioService.findAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Beneficiario pelo id'})
  @ApiResponse({ status: 200, description: 'Dados de um beneficiario retornado com sucesso!', type: ShowBeneficiarioSwagger})
  @ApiResponse({ status: 404, description: 'Beneficiario não foi encontrado', type: NotFoundSwagger})
  async findOneByOrFail(@Param('id') id: number) {
    let beneficiario;
    try {
      beneficiario = await this.beneficiarioService.findOne(+id);
    } catch {
      throw new HttpException(
        `Beneficiário com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return beneficiario;
  }
  
  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo beneficiario'})
  @ApiResponse({ status: 201, description: 'Novo beneficiario criado com sucesso!', type: CreateBeneficiarioSwagger})
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos', type: BadRequestSwagger})
  async create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
    return await this.beneficiarioService.create(createBeneficiarioDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar o cadastro do beneficiario pelo id'})
  @ApiResponse({ status: 200, description: 'Beneficiario atualizado com sucesso!', type: UpdateBeneficiarioSwagger})
  @ApiResponse({ status: 400, description: 'Beneficiário inválidos', type: BadRequestSwagger})
  @ApiResponse({ status: 404, description: 'Beneficiario não encontrado', type: NotFoundSwagger})
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return await this.beneficiarioService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar o cadastro do beneficiario pelo id'})
  @ApiResponse({ status: 204, description: 'Beneficiario removido com sucesso!'})
  @ApiResponse({ status: 404, description: 'Beneficiario não encontrado', type: NotFoundSwagger})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.beneficiarioService.remove(+id);
  }
}
