import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column } from 'typeorm';

export class Cid extends AbstractEntity {
  constructor() {
    super();
  }
  @Column()
  codigoCid: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}
