import { Test, TestingModule } from '@nestjs/testing';
import { ProdcompanyService } from './prodcompany.service';

describe('ProdcompanyService', () => {
  let service: ProdcompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdcompanyService],
    }).compile();

    service = module.get<ProdcompanyService>(ProdcompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
