import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { MetodoTerapeutico } from './entities/metodo-terapeutico.entity';

@Injectable()
export class MetodoTerapeuticoService extends GenericService<MetodoTerapeutico> {
  constructor(
    @InjectRepository(MetodoTerapeutico) repository: Repository<MetodoTerapeutico>,
  ) {
    super(repository);
  }
}
