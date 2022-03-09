import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserDto } from './entities/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) { }

	getHelloWorld() {
		return 'Hello World';
	}

	async getAllUser(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	async addUser(user: UserDto): Promise<UserEntity> {
		return await this.userRepository.save(user);
	}
}
