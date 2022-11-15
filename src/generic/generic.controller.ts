import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { IndexTodoSwagger } from 'src/swagger/index-tea.swagger';

import { AbstractEntity } from './entities/abstract-entity';
import { GenericService } from './generic.service';

export class GenericController<TEA extends AbstractEntity> {
  constructor(private service: GenericService<TEA>) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos dados'})
  @ApiResponse({ status: 200, description: 'Lista de todos os dados retornado com sucesso!',
    type: IndexTodoSwagger})
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar o dado pelo id'})
  @ApiResponse({ status: 200, description: 'Dado retornado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Dado não foi encontrado', type: IndexTodoSwagger})
  async findOneByOrFail(@Param('id') id: string) {
    let beneficiario;
    try {
      beneficiario = await this.service.findOneByOrFail(id);
    } catch {
      throw new HttpException(
        `Entidade com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return beneficiario;
  }
  
  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo dado'})
  @ApiResponse({ status: 201, description: 'Novo dado criado com sucesso!'})
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos', type: IndexTodoSwagger})
  async create(@Body() createDto: any, @Res() response: Response) {
    const entity = await this.service.create(createDto);

    response.header('uri', `/${entity.id}`);
    response.json(entity);
    response.end();
    return response;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar o dado pelo id'})
  @ApiResponse({ status: 200, description: 'Dado atualizado com sucesso!'})
  @ApiResponse({ status: 404, description: 'Dado não encontrado', type: IndexTodoSwagger})
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar o dado pelo id'})
  @ApiResponse({ status: 204, description: 'Dado removido com sucesso!'})
  @ApiResponse({ status: 404, description: 'Dado não encontrado', type: IndexTodoSwagger})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.service.remove(id);
  }
}
