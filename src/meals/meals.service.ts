import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { MealEntity } from './entities/meal.entity';

@Injectable()
export class MealsService {

	constructor(
		@InjectRepository(MealEntity)
		private mealRepository: Repository<MealEntity>
	) { }

	async getAllMeal(): Promise<MealEntity[]> {
		return this.mealRepository.find();
	}

	async getOneMealById(id: number): Promise<MealEntity> {
		return this.mealRepository.findOne(id);
	}

	async getMealsByName(name) {
		return this.mealRepository.find({
			nom: Like(`%${name}%`),
		})
	}

}
