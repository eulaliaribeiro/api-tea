import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { Solicitacao } from 'src/solicitacao/entities/solicitacao.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(()=> Solicitacao, (solicitacao) => solicitacao.medicoSolicitante)
  solicitacoes: Solicitacao[]

}
