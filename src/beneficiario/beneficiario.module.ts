import { Module } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { BeneficiarioController } from './beneficiario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './entities/beneficiario.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Solicitacao } from 'src/solicitacao/entities/solicitacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiario, Endereco, Solicitacao])],
  controllers: [BeneficiarioController],
  providers: [BeneficiarioService],
})
export class BeneficiarioModule {}
