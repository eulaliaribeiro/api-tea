import { PartialType } from '@nestjs/mapped-types';
import { CreateTerapiaDto } from './create-terapia.dto';

export class UpdateTerapiaDto extends PartialType(CreateTerapiaDto) {}
