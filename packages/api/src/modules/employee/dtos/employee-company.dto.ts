import { IsEmail, IsString } from 'class-validator';

export class CreateEmployeeDto {
	@IsEmail()
	email: string;

	@IsString()
	first_name: string;

	@IsString()
	last_name: string;

	@IsString()
	company_id: string;
}
