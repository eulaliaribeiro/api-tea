import { Beneficiario } from 'src/beneficiario/entities/beneficiario.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { MedicoSolicitante } from 'src/medico-solicitante/entities/medico-solicitante.entity';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Solicitacao extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  dataSolicitacao: Date;

  @ManyToOne(() => Beneficiario, (beneficiario)=> beneficiario.solicitacoes)
  @JoinColumn(({ name: "beneficiarioId" }))
  beneficiario: Beneficiario

  @ManyToOne(() => MedicoSolicitante, (medicoSolicitante)=> medicoSolicitante.solicitacoes)
  @JoinColumn(({ name: "medicoSolicitanteId" }))
  medicoSolicitante: MedicoSolicitante

  @OneToMany(()=> TerapiaSolicitada, (terapiaSolicitada) => terapiaSolicitada.solicitacao)
  terapiasSolicitadas: TerapiaSolicitada[]
  
}