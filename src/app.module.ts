import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';

@Module({
  imports: [BeneficiarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
