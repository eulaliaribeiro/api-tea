import { Cid } from 'src/cid/entities/cid.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { MetodoTerapeutico } from 'src/metodo-terapeutico/entities/metodo-terapeutico.entity';

import { Column, Entity } from 'typeorm';

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
  dataNascimento: string;

  @Column()
  sexo: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  endereco: string;

  @Column()
  nomePai: string;

  @Column()
  nomeMae: string;

  @Column()
  dataEntrada: string;
}
  /*@OneToOne( () => MetodoTerapeutico )
  @JoinColumn(({ name: "metodoTerapeuticoId" }))
  MetodoTerapeutico: MetodoTerapeutico

  @OneToMany(()=> Cid, (cid) => cid.beneficiario)
  Cid: Cid*/ 
