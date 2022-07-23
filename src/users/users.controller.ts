import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { FrontUserDto, UserDto, UserLoginDto } from './entities/user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('api/public/auth')
export class UsersController {

	constructor(private readonly usersService: UsersService) { }

	@Get()
	async getAllUser() {
		return await this.usersService.getAllUser();
	}

	@Post('/login')
	async login(
		@Body() user: UserLoginDto
	) {
		const userDB = await this.usersService.getOneUserByEmail(user.email);
		if (userDB) {
			const isValid = await bcrypt.compare(user.password, userDB.password);
			if (isValid) {
				return { token: jwt.sign({ id: userDB.id }, process.env.TOKEN_SECRET, { expiresIn: '1h' }) }
			} else {
				throw new HttpException('not found', HttpStatus.UNAUTHORIZED);
			}
		}
		else {
			throw new HttpException('not found', HttpStatus.NOT_FOUND);
		}

	}

	@Post('/register')
	async addUser(
		@Body() user: FrontUserDto
	) {
		const password = await bcrypt.hash(user.password, 10);
		const userDto: UserDto = { nom: user.lastname, prenom: user.firstname, email: user.email, password };

		return await this.usersService.addUser(userDto);
	}

	@Post('isTokenValid')
	isTokenValid(
		@Body() token: string
	) {
		jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
			if (err) {
				return false
			} else {
				return true
			}
		}
		)
	}
}