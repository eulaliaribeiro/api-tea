import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Exclude()
  @CreateDateColumn({ name: 'create_at' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: Date;
}
