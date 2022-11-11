import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity,  } from 'typeorm';

@Entity()
export class TerapiaSolicitada extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  nome: string;

  @Column()
  metodoTerapeutico: string;

  @Column()
  qtdSessoes: number;

}
