import { Test, TestingModule } from '@nestjs/testing';
import { MedicoAutorizadorController } from './medico-autorizador.controller';
import { MedicoAutorizadorService } from './medico-autorizador.service';

describe('MedicoAutorizadorController', () => {
  let controller: MedicoAutorizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicoAutorizadorController],
      providers: [MedicoAutorizadorService],
    }).compile();

    controller = module.get<MedicoAutorizadorController>(MedicoAutorizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
