import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MedicoAutorizador extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  medicoAutorizadorId: string;

  @Column()
  nome: string;

  @Column()
  especialidade: string;

  @OneToMany(()=> TerapiaSolicitada, (terapiaSolicitada) => terapiaSolicitada.medicoAutorizador)
  terapiasSolicitadas: TerapiaSolicitada[]
  
}