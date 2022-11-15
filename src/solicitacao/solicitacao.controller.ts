import { Controller } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';

import { Solicitacao } from './entities/solicitacao.entity';
import { GenericController } from 'src/generic/generic.controller';
import { ApiTags } from '@nestjs/swagger';

@Controller('solicitacao')
@ApiTags('Classe-Solicitação')
export class SolicitacaoController extends GenericController<Solicitacao> {
  constructor(service: SolicitacaoService) {
    super(service);
  }
}
