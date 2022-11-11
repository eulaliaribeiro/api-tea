import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericModule } from './generic/generic.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MetodoTerapeuticoModule } from './metodo-terapeutico/metodo-terapeutico.module';
import { TerapiaModule } from './terapia/terapia.module';
import { MedicoSolicitanteModule } from './medico-solicitante/medico-solicitante.module';
import { Beneficiario } from './beneficiario/entities/beneficiario.entity';
import { MedicoSolicitante } from './medico-solicitante/entities/medico-solicitante.entity';
import { MetodoTerapeutico } from './metodo-terapeutico/entities/metodo-terapeutico.entity';
import { Terapia } from './terapia/entities/terapia.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MedicoAutorizadorModule } from './medico-autorizador/medico-autorizador.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { TerapiaSolicitadaModule } from './terapia-solicitada/terapia-solicitada.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ResponsavelModule } from './responsavel/responsavel.module';
import { TerapiaSolicitada } from './terapia-solicitada/entities/terapia-solicitada.entity';
import { Responsavel } from './responsavel/entities/responsavel.entity';
import { Endereco } from './endereco/entities/endereco.entity';
import { MedicoAutorizador } from './medico-autorizador/entities/medico-autorizador.entity';
import { Solicitacao } from './solicitacao/entities/solicitacao.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
          type: 'postgres',
          database: 'tea_db',
          username: 'postgres',
          password: 'postgres',
          host: 'localhost',
          port: 5432,
          entities: [Beneficiario, MedicoSolicitante, MetodoTerapeutico, Terapia, TerapiaSolicitada, Responsavel, Endereco, MedicoAutorizador, Solicitacao],
          synchronize: true,
          logging: true,
      }),
    BeneficiarioModule,
    GenericModule,
    MedicoSolicitanteModule,
    MetodoTerapeuticoModule,
    TerapiaModule,
    AuthModule,
    UsersModule,
    MedicoAutorizadorModule,
    SolicitacaoModule,
    TerapiaSolicitadaModule,
    EnderecoModule,
    ResponsavelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
