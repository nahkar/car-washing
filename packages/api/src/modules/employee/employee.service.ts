import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEmployeeDto } from './dtos/employee-company.dto';

@Injectable()
export class EmployeeService {
	constructor(private prisma: PrismaService) {}
	getAll() {
		return this.prisma.employee.findMany();
	}
	async getById(id: string) {
		try {
			const result = await this.prisma.employee.findUnique({ where: { id } });
			if (result) {
				return result;
			}
			return new NotFoundException(`Employee with id ${id} not found`).getResponse();
		} catch (error) {
			throw new BadRequestException();
		}
	}

	async deleteById(id: string) {
		try {
			const employeeExists = await this.prisma.employee.findUnique({
				where: { id },
			});
			if (employeeExists) {
				return await this.prisma.employee.delete({ where: { id } });
			} else {
				return new NotFoundException(`Employee with id ${id} not found`).getResponse();
			}
		} catch (error) {
			throw new BadRequestException();
		}
	}

	async create(employee: CreateEmployeeDto) {
		const { company_id, ...data } = employee;

		try {
			const companyExists = await this.prisma.company.findUnique({
				where: { id: company_id },
			});
			if (companyExists) {
				return await this.prisma.employee.create({
					data: {
						...data,
						Company: { connect: { id: company_id } },
					},
				});
			} else {
				return new NotFoundException(`Company with id ${company_id} not found`).getResponse();
			}
		} catch (error) {
			throw new BadRequestException();
		}
	}
}
