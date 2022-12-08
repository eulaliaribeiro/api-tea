import { Beneficiario } from 'src/beneficiario/entities/beneficiario.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Endereco extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  uf: string;

  @Column()
  cidade: string;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  cep: string;
  
  @OneToOne( () => Beneficiario, (beneficiario) => beneficiario.endereco)
  //@JoinColumn(({ name: "beneficiarioId" }))
  @JoinColumn()
  beneficiario: Beneficiario

  
}
