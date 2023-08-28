import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dtos/create-company.dto';

@Controller('company')
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}
	@Get()
	getCompanies() {
		return this.companyService.getAll();
	}

	@Get(':id')
	getCompany(@Param('id') id: string) {
		return this.companyService.getById(id);
	}

	@Post()
	createCompany(@Body() body: CreateCompanyDto) {
		return this.companyService.create(body);
	}

	@Delete(':id')
	deleteCompany(@Param('id') id: string) {
		return this.companyService.deleteById(id);
	}
}
