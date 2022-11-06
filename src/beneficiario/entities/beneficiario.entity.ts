import { AbstractEntity } from 'src/generic/entities/abstract-entity';

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
  dataNascimento: number;

  @Column()
  sexo: string;

  @Column()
  cidade: string;

  @Column()
  UF: string;

  @Column()
  endereco: string;

  @Column()
  nomePai: string;

  @Column()
  nomeMae: string;

  @Column()
  dataEntrada: number;
}
