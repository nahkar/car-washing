import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  getCars() {
    return this.prisma.car.findMany();
  }
}
