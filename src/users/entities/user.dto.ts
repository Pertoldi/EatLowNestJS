import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {

	@IsNotEmpty()
	@IsString()
	nom: string;

	@IsNotEmpty()
	@IsString()
	prenom: string;

	@IsNotEmpty()
	@IsString()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(4)
	password: string;
}

export class FrontUserDto {
	@IsNotEmpty()
	@IsString()
	lastname: string;

	@IsNotEmpty()
	@IsString()
	firstname: string;

	@IsNotEmpty()
	@IsString()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(4)
	password: string;
}

export class UserLoginDto {

	@IsNotEmpty()
	@IsString()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	password: string;
}