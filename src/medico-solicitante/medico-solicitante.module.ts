import { Module } from '@nestjs/common';
import { MedicoSolicitanteService } from './medico-solicitante.service';
import { MedicoSolicitanteController } from './medico-solicitante.controller';
import { MedicoSolicitante } from './entities/medico-solicitante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicoSolicitante])],
  controllers: [MedicoSolicitanteController],
  providers: [MedicoSolicitanteService],
})
export class MedicoSolicitanteModule {}
