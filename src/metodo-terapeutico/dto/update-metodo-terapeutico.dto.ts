import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodoTerapeuticoDto } from './create-metodo-terapeutico.dto';

export class UpdateMetodoTerapeuticoDto extends PartialType(CreateMetodoTerapeuticoDto) {}
