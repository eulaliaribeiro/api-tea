import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
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
