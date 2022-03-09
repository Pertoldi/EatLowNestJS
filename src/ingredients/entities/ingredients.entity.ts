import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plat')
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