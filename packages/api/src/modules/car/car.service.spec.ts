import { Test, TestingModule } from '@nestjs/testing';
import { CarService } from './car.service';
import { PrismaService } from '../../prisma.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, CarService],
    }).compile();

    service = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
