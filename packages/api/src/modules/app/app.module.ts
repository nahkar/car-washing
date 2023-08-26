import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from '../employee/employee.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CompanyModule,
    EmployeeModule,
    CategoryModule,
  ],
  controllers: [],
})
export class AppModule {}
