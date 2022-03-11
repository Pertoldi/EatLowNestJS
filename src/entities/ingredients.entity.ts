import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { EnergyCost } from './energyCost.entity';
import { SubGroupEntity } from './subGroup.entity';


@Entity('ingredient')
export class IngredientEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;

	@Column()
	dqr: number;

	@Column()
	cout_energetique_id: number;

	@Column()
	sous_groupe_id: number;
}

export class Ingredient {
	constructor(
		public id: number,
		public name: string,
		public dqr: number,
		public subGroup: SubGroupEntity,
		public energyCost: EnergyCost,
	) { }
}

