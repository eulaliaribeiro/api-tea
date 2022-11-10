import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { MedicoAutorizador } from './entities/medico-autorizador.entity';

@Injectable()
export class MedicoAutorizadorService extends GenericService<MedicoAutorizador> {
  constructor(
    @InjectRepository(MedicoAutorizador)
    repository: Repository<MedicoAutorizador>,
  ) {
    super(repository);
  }
}
