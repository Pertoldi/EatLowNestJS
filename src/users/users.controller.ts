import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/public/auth')
export class UsersController {

	constructor(private readonly usersService: UsersService) { }

	@Get()
	helloWorld() {
		return this.usersService.getHelloWorld();
	}

	@Post('isTokenValid')
	isTokenValid(

	) {
		return
	}



}
