import { Controller } from '@nestjs/common';
import { MedicoAutorizadorService } from './medico-autorizador.service';
import { MedicoAutorizador } from './entities/medico-autorizador.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('medico-autorizador')
export class MedicoAutorizadorController extends GenericController<MedicoAutorizador> {
  constructor(service: MedicoAutorizadorService) {
    super(service);
  }
}
