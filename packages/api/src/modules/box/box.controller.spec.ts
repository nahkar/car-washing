import { Test, TestingModule } from '@nestjs/testing';
import { BoxController } from './box.controller';
import { PrismaService } from '../../prisma.service';
import { BoxService } from './box.service';

describe('BoxController', () => {
  let controller: BoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxController],
      providers: [PrismaService, BoxService],
    }).compile();

    controller = module.get<BoxController>(BoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
