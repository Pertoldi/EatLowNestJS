import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnergyCost, EnergyCostEntity } from 'src/entities/energyCost.entity';
import { Ingredient, IngredientEntity } from 'src/entities/ingredients.entity';
import { SubGroupEntity } from 'src/entities/subGroup.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class IngredientsService {

	constructor(
		@InjectRepository(IngredientEntity)
		private ingredientRepository: Repository<IngredientEntity>,
		@InjectRepository(SubGroupEntity)
		private subGroupRepository: Repository<SubGroupEntity>, @InjectRepository(EnergyCostEntity)
		private energyCostRepository: Repository<EnergyCostEntity>,
	) { }

	async getAllIngredients(): Promise<Ingredient[]> {
		const ingredientEntity = await this.ingredientRepository.find();
		const ingredients = this._generateIngredients(ingredientEntity);
		return ingredients;
	}

	async getOneIngredientById(id: number): Promise<Ingredient> {
		const ingredientEntity = await this.ingredientRepository.findOne(id);
		const ingredient = await this._generateIngredients([ingredientEntity]);
		return ingredient[0];
	}

	async getIngredientsByName(name: string): Promise<Ingredient[]> {
		const ingredientEntities = await this.ingredientRepository.find({
			nom: Like(`%${name}%`),
		});
		return this._generateIngredients(ingredientEntities);
	}

	/**
 * Generate Ingredients from IngredientEntities
 */
	private async _generateIngredients(ingredientEntityList: IngredientEntity[]): Promise<Ingredient[]> {
		const ingredients = [];
		for (let i = 0; i < ingredientEntityList.length; i++) {
			const ingredient = ingredientEntityList[i];

			const subGroup = await this.subGroupRepository.findOne(ingredient.sous_groupe_id);
			const ingredientEnergyCost = await this.energyCostRepository.findOne(ingredient.cout_energetique_id);
			const energyCost = new EnergyCost(ingredientEnergyCost.id,
				+ingredientEnergyCost.agriculture,
				+ingredientEnergyCost.transformation,
				+ingredientEnergyCost.emballage,
				+ingredientEnergyCost.transport,
				+ingredientEnergyCost.supermarche,
				+ingredientEnergyCost.consommation)

			ingredients.push(new Ingredient(
				ingredient.id,
				ingredient.nom,
				ingredient.dqr,
				subGroup,
				energyCost
			));
		}

		return ingredients;
	}
}
