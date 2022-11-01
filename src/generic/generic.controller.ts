import { Body, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { AbstractEntity } from './entities/abstract.entity';
import { GenericService } from './generic.service';

export class GenericController<E extends AbstractEntity> {
  constructor(private service: GenericService<E>) {}

  @Post()
  async create(@Body() createDto: any, @Res() response: Response) {
    const entity = await this.service.create(createDto);

    response.header('uri', `/${entity.id}`);
    response.json(entity);
    response.end();
    return response;
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let cliente;
    try {
      cliente = await this.service.findOne(id);
    } catch {
      throw new HttpException(
        `Entidade com id ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return cliente;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}