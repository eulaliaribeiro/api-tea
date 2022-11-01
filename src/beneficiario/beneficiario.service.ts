import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Beneficiario } from './entities/beneficiario.entity';

@Injectable()
export class BeneficiarioService extends GenericService<Beneficiario> {
  constructor(@InjectRepository(Beneficiario) repository: Repository<Beneficiario>){
  super(repository)
}
}