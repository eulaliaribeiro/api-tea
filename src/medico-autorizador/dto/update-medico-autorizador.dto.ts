import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoAutorizadorDto } from './create-medico-autorizador.dto';

export class UpdateMedicoAutorizadorDto extends PartialType(CreateMedicoAutorizadorDto) {}
