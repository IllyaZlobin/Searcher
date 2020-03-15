import { Test, TestingModule } from '@nestjs/testing';
import { ProdcompanyController } from './prodcompany.controller';

describe('Prodcompany Controller', () => {
  let controller: ProdcompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdcompanyController],
    }).compile();

    controller = module.get<ProdcompanyController>(ProdcompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
