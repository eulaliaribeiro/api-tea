import { PartialType } from '@nestjs/mapped-types';
import { CreateTerapiaSolicitadaDto } from './create-terapia-solicitada.dto';

export class UpdateTerapiaSolicitadaDto extends PartialType(CreateTerapiaSolicitadaDto) {}
