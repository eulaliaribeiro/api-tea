import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class MetodoTerapeutico extends AbstractEntity {
  constructor() {
    super();
  }
  @Column()
  metodoTerapeuticoId: string;

  @Column()
  medicoSolicitanteId: string;

  @Column()
  descricao: string;
}
