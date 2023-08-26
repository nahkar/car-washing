import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompanyController],
  providers: [PrismaService, CompanyService],
})
export class CompanyModule {}