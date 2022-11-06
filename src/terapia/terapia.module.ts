import { Module } from '@nestjs/common';
import { TerapiaService } from './terapia.service';
import { TerapiaController } from './terapia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terapia } from './entities/terapia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Terapia])],
  controllers: [TerapiaController],
  providers: [TerapiaService],
})
export class TerapiaModule {}
