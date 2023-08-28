import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateCompanyDto } from './dtos/create-company.dto';

@Injectable()
export class CompanyService {
	constructor(private prisma: PrismaService) {}
	getAll() {
		return this.prisma.company.findMany();
	}

	async getById(id: string) {
		try {
			const company = await this.prisma.company.findUnique({ where: { id } });
			if (company) {
				return company;
			}
			return new NotFoundException(`Company with id ${id} not found`).getResponse();
		} catch (error) {
			throw new BadRequestException();
		}
	}

	async deleteById(id: string) {
		try {
			const companyExists = await this.prisma.company.findUnique({ where: { id } });
			if (companyExists) {
				return await this.prisma.company.delete({ where: { id } });
			} else {
				return new NotFoundException(`Company with id ${id} not found`).getResponse();
			}
		} catch (error) {
			throw new BadRequestException();
		}
	}

	async create(company: CreateCompanyDto) {
		try {
			return await this.prisma.company.create({ data: company });
		} catch (error) {
			throw new BadRequestException();
		}
	}
}
