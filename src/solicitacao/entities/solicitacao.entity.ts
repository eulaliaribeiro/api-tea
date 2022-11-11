import { Beneficiario } from 'src/beneficiario/entities/beneficiario.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

import { Column, Entity, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Solicitacao extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  medicoSolicitante: string;

  @Column()
  dataSolicitacao: Date;

  @ManyToOne(() => Beneficiario, (beneficiario)=> beneficiario.solicitacoes)
  //@JoinColumn(({ name: "beneficiarioId" }))
  @JoinColumn()
  beneficiario: Beneficiario

  @ManyToMany(()=> TerapiaSolicitada)
  @JoinTable()
  terapiasSolicitadas: TerapiaSolicitada[]
  
}