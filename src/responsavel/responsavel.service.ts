import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Responsavel } from './entities/responsavel.entity';

@Injectable()
export class ResponsavelService extends GenericService<Responsavel> {
  constructor(
    @InjectRepository(Responsavel) repository: Repository<Responsavel>,
  ) {
    super(repository);
  }
} 
