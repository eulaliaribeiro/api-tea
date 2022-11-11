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

  /*
  @ManyToOne(() => Beneficiario, (beneficiario)=> beneficiario.solicitacoes)
  @JoinColumn(({ name: "beneficiarioId" }))
  beneficiario: Beneficiario

  @ManyToOne(() => MedicoSolicitante, (medicoSolicitante)=> medicoSolicitante.solicitacoes)
  @JoinColumn(({ name: "medicoSolicitanteId" }))
  medicoSolicitante: MedicoSolicitante

  @OneToMany(()=> TerapiaSolicitada, (terapiaSolicitada) => terapiaSolicitada.solicitacao)
  terapiasSolicitadas: TerapiaSolicitada[]
  */
}