import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class MedicoSolicitante extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  medicoSolicitanteID: string;

  @Column()
  nome: string;

  @Column()
  especialidade: string;
}
