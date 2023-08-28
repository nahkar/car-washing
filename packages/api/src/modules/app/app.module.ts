import { Module } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from '../employee/employee.module';
import { CategoryModule } from '../category/category.module';
import { CarModule } from '../car/car.module';
import { CustomerModule } from '../customer/customer.module';
import { BoxModule } from '../box/box.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `.env.${process.env.NODE_ENV}`,
		}),
		CompanyModule,
		EmployeeModule,
		CategoryModule,
		CarModule,
		CustomerModule,
		BoxModule,
	],
	controllers: [],
})
export class AppModule {}
