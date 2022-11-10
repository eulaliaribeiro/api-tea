import { Test, TestingModule } from '@nestjs/testing';
import { TerapiaSolicitadaController } from './terapia-solicitada.controller';
import { TerapiaSolicitadaService } from './terapia-solicitada.service';

describe('TerapiaSolicitadaController', () => {
  let controller: TerapiaSolicitadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerapiaSolicitadaController],
      providers: [TerapiaSolicitadaService],
    }).compile();

    controller = module.get<TerapiaSolicitadaController>(TerapiaSolicitadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
