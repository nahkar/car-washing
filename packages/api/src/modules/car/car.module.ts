import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [CarController],
  providers: [PrismaService, CarService],
})
export class CarModule {}
