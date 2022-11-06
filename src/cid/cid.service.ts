import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Cid } from './entities/cid.entity';

@Injectable()
export class CidService extends GenericService<Cid> {
  constructor(@InjectRepository(Cid) repository: Repository<Cid>) {
    super(repository);
  }
}
