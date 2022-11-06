import { Test, TestingModule } from '@nestjs/testing';
import { MetodoTerapeuticoController } from './metodo-terapeutico.controller';
import { MetodoTerapeuticoService } from './metodo-terapeutico.service';

describe('MetodoTerapeuticoController', () => {
  let controller: MetodoTerapeuticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodoTerapeuticoController],
      providers: [MetodoTerapeuticoService],
    }).compile();

    controller = module.get<MetodoTerapeuticoController>(MetodoTerapeuticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
