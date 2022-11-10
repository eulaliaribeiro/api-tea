import { Module } from '@nestjs/common';
import { TerapiaSolicitadaService } from './terapia-solicitada.service';
import { TerapiaSolicitadaController } from './terapia-solicitada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerapiaSolicitada } from './entities/terapia-solicitada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TerapiaSolicitada])],
  controllers: [TerapiaSolicitadaController],
  providers: [TerapiaSolicitadaService],
})
export class TerapiaSolicitadaModule {}
