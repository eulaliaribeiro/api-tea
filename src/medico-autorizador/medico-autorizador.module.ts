import { Module } from '@nestjs/common';
import { MedicoAutorizadorService } from './medico-autorizador.service';
import { MedicoAutorizadorController } from './medico-autorizador.controller';
import { MedicoAutorizador } from './entities/medico-autorizador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicoAutorizador])],
  controllers: [MedicoAutorizadorController],
  providers: [MedicoAutorizadorService],
})
export class MedicoAutorizadorModule {}
