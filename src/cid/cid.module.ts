import { Module } from '@nestjs/common';
import { CidService } from './cid.service';
import { CidController } from './cid.controller';
import { Cid } from './entities/cid.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cid])],
  controllers: [CidController],
  providers: [CidService],
})
export class CidModule {}
