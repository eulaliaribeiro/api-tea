import { Controller } from '@nestjs/common';
import { MetodoTerapeuticoService } from './metodo-terapeutico.service';
import { MetodoTerapeutico } from './entities/metodo-terapeutico.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('metodo-terapeutico')
export class MetodoTerapeuticoController extends GenericController<MetodoTerapeutico> {
  constructor(service: MetodoTerapeuticoService) {
    super(service);
  }
}
