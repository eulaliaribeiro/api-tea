import { Controller } from '@nestjs/common';
import { Beneficiario } from './entities/beneficiario.entity';
import { GenericController } from 'src/generic/generic.controller';
import { BeneficiarioService } from './beneficiario.service';

@Controller('beneficiario')
export class BeneficiarioController extends GenericController<Beneficiario> {
  constructor(service: BeneficiarioService) {
    super(service);
  }
}
