import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexBeneficiarioSwagger } from 'src/swagger/index-Beneficiario.swagger';
import { BeneficiarioService } from './beneficiario.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';

@Controller('beneficiario')
@ApiTags('Classe-Beneficiario')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) { }

  @Get()
  @ApiOperation({ summary: 'Listar de todos os beneficiarios'})
  @ApiResponse({ status: 200, description: 'Lista de beneficiario retornada com sucesso!',type: IndexBeneficiarioSwagger})
  async findAll() {
    return this.beneficiarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Beneficiario pelo id'})
  @ApiResponse({ status: 200, description: 'Dados de um beneficiario retornado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Beneficiario não foi encontrado', type: IndexBeneficiarioSwagger})
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
  @ApiResponse({ status: 201, description: 'Novo beneficiario criado com sucesso!'})
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos', type: IndexBeneficiarioSwagger})
  async create(@Body() createBeneficiarioDto: CreateBeneficiarioDto) {
    return await this.beneficiarioService.create(createBeneficiarioDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar o cadastro do beneficiario pelo id'})
  @ApiResponse({ status: 200, description: 'Beneficiario atualizado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Beneficiario não encontrado', type: IndexBeneficiarioSwagger})
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return await this.beneficiarioService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar o cadastro do beneficiario pelo id'})
  @ApiResponse({ status: 204, description: 'Beneficiario removido com sucesso!'})
  @ApiResponse({ status: 404, description: 'Beneficiario não encontrado', type: IndexBeneficiarioSwagger})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number){
    await this.beneficiarioService.remove(+id);
  }
}
