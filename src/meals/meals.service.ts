import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { Meal, MealEntity, SubGroupEntity } from './entities/meal.entity';

@Injectable()
export class MealsService {

	constructor(
		@InjectRepository(MealEntity)
		private mealRepository: Repository<MealEntity>,
		@InjectRepository(SubGroupEntity)
		private subGroupRepository: Repository<SubGroupEntity>
	) { }

	async getAllMeal(): Promise<any> {
		const mealEntity = await this.mealRepository.find();
		const meals = this._generateMeals(mealEntity);
		return meals;
	}

	async getOneMealById(id: number): Promise<MealEntity> {
		return this.mealRepository.findOne(id);//TODO Liaison à la main si pas de relation OneTO One possible 
	}

	async getMealsByName(name) {
		return this.mealRepository.find({
			nom: Like(`%${name}%`),
		})
	}

	/**
	 * Generate Meal from MealEntity
	 * @param MealEntityList 
	 * @returns 
	 */
	private async _generateMeals(MealEntityList: MealEntity[]): Promise<Meal[]> {
		const meals = []
		for (let i = 0; i < MealEntityList.length; i++) {
			const mealEntity = MealEntityList[i];
			const subGroup = await this.subGroupRepository.findOne(mealEntity.sous_groupe_id)
			meals.push(new Meal(mealEntity.id, mealEntity.nom, subGroup, mealEntity.cout_autre_etape));
		}
		return meals;
	}
}
