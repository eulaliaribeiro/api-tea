import { Test, TestingModule } from '@nestjs/testing';
import { MedicoAutorizadorService } from './medico-autorizador.service';

describe('MedicoAutorizadorService', () => {
  let service: MedicoAutorizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicoAutorizadorService],
    }).compile();

    service = module.get<MedicoAutorizadorService>(MedicoAutorizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
