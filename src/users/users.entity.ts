import { AbstractEntity } from "src/generic/entities/abstract-entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Users extends AbstractEntity {    
    
    @Column({ length: 60 })
    username: string;

    @Column()
    password: string;

}