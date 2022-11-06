import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoSolicitanteDto } from './create-medico-solicitante.dto';

export class UpdateMedicoSolicitanteDto extends PartialType(CreateMedicoSolicitanteDto) {}
