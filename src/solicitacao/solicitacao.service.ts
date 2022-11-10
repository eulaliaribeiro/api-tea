import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Solicitacao } from './entities/solicitacao.entity';

@Injectable()
export class SolicitacaoService extends GenericService<Solicitacao> {
  constructor(
    @InjectRepository(Solicitacao) repository: Repository<Solicitacao>,
  ) {
    super(repository);
  }
}
