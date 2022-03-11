import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompoPlatIngredientEntity } from 'src/entities/compoPlatIngredient.entity';
import { EnergyCost, EnergyCostEntity } from 'src/entities/energyCost.entity';
import { Ingredient, IngredientEntity } from 'src/entities/ingredients.entity';
import { Meal, MealEntity } from 'src/entities/meals.entity';
import { SubGroupEntity } from 'src/entities/subGroup.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class MealsService {

	constructor(
		@InjectRepository(MealEntity)
		private mealRepository: Repository<MealEntity>,
		@InjectRepository(SubGroupEntity)
		private subGroupRepository: Repository<SubGroupEntity>,
		@InjectRepository(CompoPlatIngredientEntity)
		private compoRepository: Repository<CompoPlatIngredientEntity>,
		@InjectRepository(IngredientEntity)
		private ingredientRepository: Repository<IngredientEntity>,
		@InjectRepository(EnergyCostEntity)
		private energyCostRepository: Repository<EnergyCostEntity>,
	) { }

	async getAllMeals(): Promise<Meal[]> {
		const mealEntity = await this.mealRepository.find();
		const meals = this._generateMeals(mealEntity);
		return meals;
	}

	async getOneMealById(id: number): Promise<Meal> {
		const mealEntity = await this.mealRepository.findOne(id);
		const meal = await this._generateMeals([mealEntity]);
		return meal[0];
	}

	async getMealsByName(name: string): Promise<Meal[]> {
		const mealEntities = await this.mealRepository.find({
			nom: Like(`%${name}%`),
		});
		return this._generateMeals(mealEntities);
	}

	/**
	 * Generate Meals from MealEntities
	 */
	private async _generateMeals(MealEntityList: MealEntity[]): Promise<Meal[]> {
		const meals = []

		for (let i = 0; i < MealEntityList.length; i++) {
			const mealEntity = MealEntityList[i];
			// generation du subgroup
			const subGroup = await this.subGroupRepository.findOne(mealEntity.sous_groupe_id);

			//generation ingredients
			const compoPlatIngredient = await this.compoRepository.find({ where: { plat_id: mealEntity.id } });
			const ingredients = []
			for (let t = 0; t < compoPlatIngredient.length; t++) {
				const compo = compoPlatIngredient[t];
				const ingredientEntity = await this.ingredientRepository.findOne(compo.ingredient_id);
				ingredients.push(ingredientEntity);
			}

			//ajout des sous catégorie de ingredients
			const ingredientsMap = []
			for (let y = 0; y < ingredients.length; y++) {
				const ingredient = ingredients[y];
				const ingredientSubGroup = await this.subGroupRepository.findOne(ingredient.sous_groupe_id);
				const ingredientEnergyCost = await this.energyCostRepository.findOne(ingredient.cout_energetique_id);
				const energyCost = new EnergyCost(ingredientEnergyCost.id,
					+ingredientEnergyCost.agriculture,
					+ingredientEnergyCost.transformation,
					+ingredientEnergyCost.emballage,
					+ingredientEnergyCost.transport,
					+ingredientEnergyCost.supermarche,
					+ingredientEnergyCost.consommation)

				ingredientsMap.push(new Ingredient(ingredient.id,
					ingredient.nom,
					ingredient.dqr,
					ingredientSubGroup,
					energyCost
				));
			}

			meals.push(new Meal(mealEntity.id, mealEntity.nom, subGroup, ingredientsMap, mealEntity.cout_autre_etape));
		}

		return meals;
	}
}
