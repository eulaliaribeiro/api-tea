import { Module } from '@nestjs/common';
import { MetodoTerapeuticoService } from './metodo-terapeutico.service';
import { MetodoTerapeuticoController } from './metodo-terapeutico.controller';
import { MetodoTerapeutico } from './entities/metodo-terapeutico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoTerapeutico])],
  controllers: [MetodoTerapeuticoController],
  providers: [MetodoTerapeuticoService],
})
export class MetodoTerapeuticoModule {}
