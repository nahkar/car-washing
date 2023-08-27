import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  getEmployees() {
    return this.prisma.employee.findMany();
  }
}
