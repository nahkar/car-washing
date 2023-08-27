import { Test, TestingModule } from '@nestjs/testing';
import { BoxService } from './box.service';
import { PrismaService } from '../../prisma.service';

describe('BoxService', () => {
  let service: BoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, BoxService],
    }).compile();

    service = module.get<BoxService>(BoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
