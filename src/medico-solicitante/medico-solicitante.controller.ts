import { Controller } from '@nestjs/common';
import { MedicoSolicitanteService } from './medico-solicitante.service';
import { MedicoSolicitante } from './entities/medico-solicitante.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('medico-solicitante')
export class MedicoSolicitanteController extends GenericController<MedicoSolicitante> {
  constructor(service: MedicoSolicitanteService) {
    super(service);
  }
}
