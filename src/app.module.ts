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

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 5432)),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', '123451625oaMJ@'),
        database: configService.get('DB_DATABASE', 'tea_db'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: false,
        logging: true,
      }),
    }),
    BeneficiarioModule,
    GenericModule,
    CidModule,
    MetodoTerapeuticoModule,
    TerapiaModule,
    MedicoSolicitanteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
