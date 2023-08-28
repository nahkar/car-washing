import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dtos/employee-company.dto';

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	getEmployees() {
		return this.employeeService.getAll();
	}

	@Get(':id')
	getEmployee(@Param('id') id: string) {
		return this.employeeService.getById(id);
	}

	@Post()
	createEmployee(@Body() body: CreateEmployeeDto) {
		return this.employeeService.create(body);
	}

	@Delete(':id')
	deleteEmployee(@Param('id') id: string) {
		return this.employeeService.deleteById(id);
	}
}
