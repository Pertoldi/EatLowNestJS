import { Body, Controller, Get, Post } from '@nestjs/common';

import { FrontUserDto, UserDto, UserLoginDto } from './entities/user.dto';
import { UsersService } from './users.service';

@Controller('api/public/auth')
export class UsersController {

	constructor(private readonly usersService: UsersService) { }

	@Get()
	async getAllUser() {
		return await this.usersService.getAllUser();
	}

	// @Post('/login')
	// async login(
	// 	@Body() user: UserLoginDto
	// ) {
	// 	return await this.usersService.login(user);
	// }

	@Post('/register')
	async addUser(
		@Body() user: FrontUserDto
	) {
		console.log('user from register is :', user)
		const userDto: UserDto = { nom: user.lastname, prenom: user.firstname, email: user.email, password: user.password }
		console.log('userDto is :', userDto)
		return await this.usersService.addUser(userDto);
	}

	@Post('isTokenValid')
	isTokenValid(

	) {
		return
	}
}
