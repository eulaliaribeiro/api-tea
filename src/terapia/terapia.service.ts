import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Terapia } from './entities/terapia.entity';

@Injectable()
export class TerapiaService extends GenericService<Terapia> {
  constructor(
    @InjectRepository(TerapiaService) repository: Repository<Terapia>,
  ) {
    super(repository);
  }
}
