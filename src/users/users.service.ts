import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

	getHelloWorld() {
		return 'Hello World';
	}
}
