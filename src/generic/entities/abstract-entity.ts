import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  
  @Exclude()
  @CreateDateColumn({ name: 'create_at' })
  @ApiProperty()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'update_at' })
  @ApiProperty()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({ name: 'delete_at' })
  @ApiProperty()
  deletedAt: Date;
}
