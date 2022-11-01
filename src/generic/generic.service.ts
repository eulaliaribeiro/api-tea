import { Repository } from 'typeorm';
import { AbstractEntity } from './entities/abstract.entity';

export class GenericService<E extends AbstractEntity> {
  constructor(private repository: Repository<E>) {}

  create(createDto: any): Promise<E> {
    const entity = this.repository.create(createDto) as any;
    return this.repository.save(entity as E);
  }

  findAll(): Promise<E[]> {
    return this.repository.find();
  }

  findOne(id: any): Promise<E> {
    return this.repository.findOneByOrFail({ id });
  }

  update(id: any, updateDto: any): Promise<E> {
    this.repository.findOneByOrFail({ id });
    const entity = this.repository.create(updateDto) as any;
    this.repository.update({ id }, entity);
    return this.repository.findOneByOrFail({ id });
  }

  remove(id: any) {
    this.repository.findOneByOrFail({ id });
    this.repository.softDelete(id);
  }
}
