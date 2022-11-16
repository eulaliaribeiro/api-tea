import { IsObject } from "class-validator";
import { Endereco } from "src/endereco/entities/endereco.entity";
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { Solicitacao } from "src/solicitacao/entities/solicitacao.entity";

import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Beneficiario extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  beneficiarioCarteira: string;

  @Column()
  cid: string;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  sexo: string;

  @Column()
  responsavelCarteira: string;

  @Column()
  dataEntrada: string;
  
  @OneToOne( () => Endereco, (endereco) => endereco.beneficiario, {cascade: ["insert", "update"]})
  @IsObject()
  endereco: Endereco



  
  @OneToMany(()=> Solicitacao, (solicitacao) => solicitacao.beneficiario)
  solicitacoes: Solicitacao[]
  
}