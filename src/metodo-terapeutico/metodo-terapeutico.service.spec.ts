import { Test, TestingModule } from '@nestjs/testing';
import { MetodoTerapeuticoService } from './metodo-terapeutico.service';

describe('MetodoTerapeuticoService', () => {
  let service: MetodoTerapeuticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodoTerapeuticoService],
    }).compile();

    service = module.get<MetodoTerapeuticoService>(MetodoTerapeuticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
