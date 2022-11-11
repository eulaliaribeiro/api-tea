import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Terapia extends AbstractEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  TerapiaId: string;

  @Column()
  metodoTerapeuticoId: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  /*
  @OneToMany(()=> TerapiaSolicitada, (terapiaSolicitada) => terapiaSolicitada.terapia)
  terapiasSolicitadas: TerapiaSolicitada[]

  @ManyToOne(() => MetodoTerapeutico, (metodoTerapeutico)=> metodoTerapeutico.terapias)
  @JoinColumn(({ name: "metodoTerapeuticoId" }))
  metodoTerapeutico: MetodoTerapeutico
  */

}
