import { Beneficiario } from 'src/beneficiario/entities/beneficiario.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Responsavel extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  nome: string;

  @Column()
  parentesco: string;

  @OneToMany(()=> Beneficiario, (beneficiario) => beneficiario.responsavel)
  beneficiarios: Beneficiario[]

}