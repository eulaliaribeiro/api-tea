import { Test, TestingModule } from '@nestjs/testing';
import { TerapiaController } from './terapia.controller';
import { TerapiaService } from './terapia.service';

describe('TerapiaController', () => {
  let controller: TerapiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerapiaController],
      providers: [TerapiaService],
    }).compile();

    controller = module.get<TerapiaController>(TerapiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
