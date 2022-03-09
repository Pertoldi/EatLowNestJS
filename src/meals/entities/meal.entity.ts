import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
	id: number;
	name: string;
	subGroup: SubGroupEntity;
	// ingredients: Ingredient[];
	otherStepCost: number;
	constructor(
		id: number,
		name: string,
		subGroup: SubGroupEntity,
		// ingredients: Ingredient[],
		otherStepCost: number,
	) {
		this.id = id;
		this.name = name;
		this.subGroup = subGroup;
		this.otherStepCost = otherStepCost;
	}
}

@Entity('sous_groupe')
export class SubGroupEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;
}

export class Ingredient {
	id: number;
	name: string;
	dqr: number;
	subGroup: SubGroupEntity;
	// energyCost: IEnergyCost
}