import { Endereco } from "src/endereco/entities/endereco.entity";
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { Responsavel } from "src/responsavel/entities/responsavel.entity";
import { Solicitacao } from "src/solicitacao/entities/solicitacao.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
//import { Solicitacao } from "src/solicitacao/entities/solicitacao.entity";
//import { Responsavel } from "src/responsavel/entities/responsavel.entity";

@Entity()
export class Beneficiario extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  cid: string;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  sexo: string;

  @Column()
  judicializado: boolean;

  @Column()
  dataEntrada: string;

  @OneToOne( () => Endereco, {cascade:true})
  @JoinColumn(({ name: "enderecoId" }))
  endereco: Endereco

  @ManyToOne(() => Responsavel, (responsavel)=> responsavel.beneficiarios)
  @JoinColumn(({ name: "responsavelId" }))
  responsavel: Responsavel
  
  @OneToMany(()=> Solicitacao, (solicitacao) => solicitacao.beneficiario)
  solicitacoes: Solicitacao[]
  
}