import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserDto } from './entities/user.dto';
import { UsersService } from './users.service';

@Controller('api/public/auth')
export class UsersController {

	constructor(private readonly usersService: UsersService) { }

	@Get('test')
	helloWorld() {
		return this.usersService.getHelloWorld();
	}

	@Get()
	async getAllUser() {
		return await this.usersService.getAllUser();
	}

	@Post()
	async addUser(
		@Body() user: UserDto
	) {
		return await this.usersService.addUser(user);
	}

	@Post('isTokenValid')
	isTokenValid(

	) {
		return
	}



}
