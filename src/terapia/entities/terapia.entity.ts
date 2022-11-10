import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Terapia extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  solicitacaoTerapiaID: string;

  @Column()
  metodoTerapeuticoId: string;

  @Column()
  nomeEspecialidade: string;

  @Column()
  qtdSessoesUtilizadas: number;

  @Column()
  qtdSessoesGlosadas: number;

  @Column()
  dataSolicitacao: number;

  @Column()
  dataExecucao: number;
}
