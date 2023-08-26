import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  getCompanies() {
    return this.prisma.company.findMany();
  }
}
