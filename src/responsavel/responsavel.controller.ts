import { Controller } from '@nestjs/common';
import { Responsavel } from './entities/responsavel.entity';
import { GenericController } from 'src/generic/generic.controller';
import { ResponsavelService } from './responsavel.service';

@Controller('responsavel')
export class ResponsavelController extends GenericController<Responsavel> {
  constructor(service: ResponsavelService) {
    super(service);
  }
}
