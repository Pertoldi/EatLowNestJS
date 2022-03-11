import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Ingredient } from './ingredients.entity';
import { SubGroupEntity } from './subGroup.entity';

@Entity('plat') //nom de la table dans la Base de données
export class MealEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;

	@Column()
	sous_groupe_id: number;

	@Column()
	cout_autre_etape: number;

}

export class Meal {
	constructor(
		public id: number,
		public name: string,
		public subGroup: SubGroupEntity,
		public ingredients: Ingredient[],
		public otherStepCost: number,
	) { }
}



