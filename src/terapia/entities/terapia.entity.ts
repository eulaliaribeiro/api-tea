import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { MetodoTerapeutico } from 'src/metodo-terapeutico/entities/metodo-terapeutico.entity';
import { TerapiaSolicitada } from 'src/terapia-solicitada/entities/terapia-solicitada.entity';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Terapia extends AbstractEntity {
  constructor() {
    super();
  }

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(()=> TerapiaSolicitada, (terapiaSolicitada) => terapiaSolicitada.terapia)
  terapiasSolicitadas: TerapiaSolicitada[]

  @ManyToOne(() => MetodoTerapeutico, (metodoTerapeutico)=> metodoTerapeutico.terapias)
  @JoinColumn(({ name: "metodoTerapeuticoId" }))
  metodoTerapeutico: MetodoTerapeutico

}
