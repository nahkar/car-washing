import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CompanyModule,
    EmployeeModule,
  ],
  controllers: [],
})
export class AppModule {}
