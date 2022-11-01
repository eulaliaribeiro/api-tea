import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './beneficiario/entities/beneficiario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'auladbjs',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Beneficiario],
      synchronize: true,
      logging: true,
    }),
    BeneficiarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
