import { Controller } from '@nestjs/common';
import { TerapiaSolicitadaService } from './terapia-solicitada.service';

import { TerapiaSolicitada } from './entities/terapia-solicitada.entity';
import { GenericController } from 'src/generic/generic.controller';
import { ApiTags } from '@nestjs/swagger';

@Controller('terapia-solicitada')
@ApiTags('Classe-Terapia-Solicitada')
export class TerapiaSolicitadaController extends GenericController<TerapiaSolicitada> {
  constructor(service: TerapiaSolicitadaService) {
    super(service);
  }
}
