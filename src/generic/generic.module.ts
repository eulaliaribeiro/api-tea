import { Module } from '@nestjs/common';
import { GenericService } from './generic.service';

@Module({
  providers: [GenericService],
})
export class GenericServiceModule {}
