import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { Terapia } from 'src/terapia/entities/terapia.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class MetodoTerapeutico extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(()=> Terapia, (terapia) => terapia.metodoTerapeutico)
  terapias: Terapia[]
  
}
