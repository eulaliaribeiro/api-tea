import { Test, TestingModule } from '@nestjs/testing';
import { MedicoSolicitanteService } from './medico-solicitante.service';

describe('MedicoSolicitanteService', () => {
  let service: MedicoSolicitanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicoSolicitanteService],
    }).compile();

    service = module.get<MedicoSolicitanteService>(MedicoSolicitanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
