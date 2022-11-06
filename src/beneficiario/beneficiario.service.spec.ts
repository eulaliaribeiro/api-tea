import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiarioService } from './beneficiario.service';

describe('BeneficiarioService', () => {
  let service: BeneficiarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiarioService],
    }).compile();

    service = module.get<BeneficiarioService>(BeneficiarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
