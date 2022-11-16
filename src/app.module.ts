import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericModule } from './generic/generic.module';
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { Beneficiario } from './beneficiario/entities/beneficiario.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { TerapiaSolicitadaModule } from './terapia-solicitada/terapia-solicitada.module';
import { EnderecoModule } from './endereco/endereco.module';
import { TerapiaSolicitada } from './terapia-solicitada/entities/terapia-solicitada.entity';
import { Endereco } from './endereco/entities/endereco.entity';
import { Solicitacao } from './solicitacao/entities/solicitacao.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { conectionVariables } from './auth/auth.constants';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: conectionVariables.DATABASE_HOST,
      port: conectionVariables.DATABASE_PORT,
      username: conectionVariables.DATABASE_USER,
      password: conectionVariables.DATABASE_PASSWORD,
      database: conectionVariables.DATABASE_NAME,
      entities: [Beneficiario, TerapiaSolicitada, Endereco, Solicitacao],
      synchronize: true,
      logging: true,
      }),
    BeneficiarioModule,
    GenericModule,
    AuthModule,
    UsersModule,
    SolicitacaoModule,
    TerapiaSolicitadaModule,
    EnderecoModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }],
})
export class AppModule {}
