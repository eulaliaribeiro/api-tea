import { Test, TestingModule } from '@nestjs/testing';
import { TerapiaService } from './terapia.service';

describe('TerapiaService', () => {
  let service: TerapiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerapiaService],
    }).compile();

    service = module.get<TerapiaService>(TerapiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
