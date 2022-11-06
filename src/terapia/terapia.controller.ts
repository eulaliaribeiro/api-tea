import { Controller } from '@nestjs/common';
import { TerapiaService } from './terapia.service';

import { Terapia } from './entities/terapia.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('terapia')
export class TerapiaController extends GenericController<Terapia> {
  constructor(service: TerapiaService) {
    super(service);
  }
}
