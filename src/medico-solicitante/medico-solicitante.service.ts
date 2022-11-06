import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { MedicoSolicitante } from './entities/medico-solicitante.entity';

@Injectable()
export class MedicoSolicitanteService extends GenericService<MedicoSolicitante> {
  constructor(
    @InjectRepository(MedicoSolicitante)
    repository: Repository<MedicoSolicitante>,
  ) {
    super(repository);
  }
}
