import { Test, TestingModule } from '@nestjs/testing';
import { TerapiaSolicitadaService } from './terapia-solicitada.service';

describe('TerapiaSolicitadaService', () => {
  let service: TerapiaSolicitadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerapiaSolicitadaService],
    }).compile();

    service = module.get<TerapiaSolicitadaService>(TerapiaSolicitadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
