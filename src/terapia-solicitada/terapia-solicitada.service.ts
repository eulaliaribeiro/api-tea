import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { TerapiaSolicitada } from './entities/terapia-solicitada.entity';

@Injectable()
export class TerapiaSolicitadaService extends GenericService<TerapiaSolicitada> {
  constructor(
    @InjectRepository(TerapiaSolicitada) repository: Repository<TerapiaSolicitada>,
  ) {
    super(repository);
  }
}
