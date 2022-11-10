import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TerapiaSolicitada extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  terapiaSolicitadaId: string;

  @Column()
  terapiaId: string;

  @Column()
  medicoAutorizadorId: string;

  @Column()
  qtdSessoes: number;

  @Column()
  dataAutorizacao: Date;

}
