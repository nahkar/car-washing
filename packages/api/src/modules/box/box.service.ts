import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BoxService {
  constructor(private prisma: PrismaService) {}
  getBoxes() {
    return this.prisma.box.findMany();
  }
}
