import { Test, TestingModule } from '@nestjs/testing';
import { MedicoSolicitanteController } from './medico-solicitante.controller';
import { MedicoSolicitanteService } from './medico-solicitante.service';

describe('MedicoSolicitanteController', () => {
  let controller: MedicoSolicitanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicoSolicitanteController],
      providers: [MedicoSolicitanteService],
    }).compile();

    controller = module.get<MedicoSolicitanteController>(MedicoSolicitanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
