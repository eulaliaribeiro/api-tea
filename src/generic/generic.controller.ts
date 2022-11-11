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
import { Response } from 'express';

import { AbstractEntity } from './entities/abstract-entity';
import { GenericService } from './generic.service';

export class GenericController<TEA extends AbstractEntity> {
  constructor(private service: GenericService<TEA>) {}

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
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
  async create(@Body() createDto: any, @Res() response: Response) {
    const entity = await this.service.create(createDto);

    response.header('uri', `/${entity.id}`);
    response.json(entity);
    response.end();
    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return await this.service.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.service.remove(id);
  }
}
