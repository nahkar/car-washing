import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  getCustomers() {
    return this.prisma.customer.findMany();
  }
}
