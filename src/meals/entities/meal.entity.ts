import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plat')
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