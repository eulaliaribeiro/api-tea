import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Solicitacao extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  SolicitacaoId: string;

  @Column()
  beneficiarioId: string;

  @Column()
  medicoSolicitanteId: string;

  @Column()
  dataSolicitacao: Date;

}
