import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericModule } from './generic/generic.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CidModule } from './cid/cid.module';
import { MetodoTerapeuticoModule } from './metodo-terapeutico/metodo-terapeutico.module';
import { TerapiaModule } from './terapia/terapia.module';
import { MedicoSolicitanteModule } from './medico-solicitante/medico-solicitante.module';
import { Beneficiario } from './beneficiario/entities/beneficiario.entity';
import { Cid } from './cid/entities/cid.entity';
import { MedicoSolicitante } from './medico-solicitante/entities/medico-solicitante.entity';
import { MetodoTerapeutico } from './metodo-terapeutico/entities/metodo-terapeutico.entity';
import { Terapia } from './terapia/entities/terapia.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MedicoAutorizadorModule } from './medico-autorizador/medico-autorizador.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { TerapiaSolicitadaModule } from './terapia-solicitada/terapia-solicitada.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ResponsavelBeneficiarioModule } from './responsavel-beneficiario/responsavel-beneficiario.module';
import { ResponsavelModule } from './responsavel/responsavel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
          type: 'postgres',
          database: 'tea_db',
          username: 'postgres',
          password: '1625oaMJ@',
          host: 'localhost',
          port: 5432,
          entities: [Beneficiario, Cid, MedicoSolicitante, MetodoTerapeutico, Terapia],
          synchronize: true,
          logging: true,
      }),
    BeneficiarioModule,
    GenericModule,
    CidModule,
    MedicoSolicitanteModule,
    MetodoTerapeuticoModule,
    TerapiaModule,
    AuthModule,
    UsersModule,
    MedicoAutorizadorModule,
    SolicitacaoModule,
    TerapiaSolicitadaModule,
    EnderecoModule,
    ResponsavelBeneficiarioModule,
    ResponsavelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
