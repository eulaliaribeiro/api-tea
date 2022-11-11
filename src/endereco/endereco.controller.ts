import { Controller } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

import { Endereco } from './entities/endereco.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('endereco')
export class EnderecoController extends GenericController<Endereco> {
  constructor(service: EnderecoService) {
    super(service);
  }
}
