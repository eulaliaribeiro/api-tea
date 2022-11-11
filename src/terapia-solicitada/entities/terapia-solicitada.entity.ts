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

  /*
  @ManyToOne(() => Solicitacao, (solicitacao)=> solicitacao.terapiasSolicitadas)
  @JoinColumn(({ name: "solicitacaoId" }))
  solicitacao: Solicitacao

  @ManyToOne(() => MedicoAutorizador, (medicoAutorizador)=> medicoAutorizador.terapiasSolicitadas)
  @JoinColumn(({ name: "medicoAutorizadorId" }))
  medicoAutorizador: MedicoAutorizador

  @ManyToOne(() => Terapia, (terapia)=> terapia.terapiasSolicitadas)
  @JoinColumn(({ name: "terapiaId" }))
  terapia: Terapia
  */

}
