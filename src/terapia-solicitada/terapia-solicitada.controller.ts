import { Controller } from '@nestjs/common';
import { TerapiaSolicitadaService } from './terapia-solicitada.service';

import { TerapiaSolicitada } from './entities/terapia-solicitada.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('terapia-solicitada')
export class TerapiaSolicitadaController extends GenericController<TerapiaSolicitada> {
  constructor(service: TerapiaSolicitadaService) {
    super(service);
  }
}
