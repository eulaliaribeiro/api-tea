import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AbstractEntity } from './entities/abstract-entity';

export class GenericService<TEA extends AbstractEntity> {
  constructor(private repository: Repository<TEA>) {}

  async findAll(): Promise<TEA[]> {
    return await this.repository.find();
  }

  async findOneByOrFail(id: any): Promise<TEA> {
    try {
      return await this.repository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  async create(createDto: any): Promise<TEA> {
    const entity = this.repository.create(createDto) as any;
    return await this.repository.save(entity as TEA);
  }

  async update(id: any, updateDto: any): Promise<TEA> {
    await this.repository.findOneByOrFail({ id });
    const entity = this.repository.create(updateDto) as any;
    this.repository.update({ id }, entity);
    return await this.repository.findOneByOrFail({ id });
  }

  async remove(id: any) {
    await this.repository.findOneByOrFail({ id });
    await this.repository.softDelete(id);
  }
}
