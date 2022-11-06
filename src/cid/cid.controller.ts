import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { CidService } from './cid.service';
import { Cid } from './entities/cid.entity';

@Controller('cid')
export class CidController extends GenericController<Cid> {
  constructor(service: CidService) {
    super(service);
  }
}
