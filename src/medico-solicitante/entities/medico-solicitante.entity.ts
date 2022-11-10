import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
