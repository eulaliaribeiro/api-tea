import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiarioController } from './beneficiario.controller';
import { BeneficiarioService } from './beneficiario.service';

describe('BeneficiarioController', () => {
  let controller: BeneficiarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiarioController],
      providers: [BeneficiarioService],
    }).compile();

    controller = module.get<BeneficiarioController>(BeneficiarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
