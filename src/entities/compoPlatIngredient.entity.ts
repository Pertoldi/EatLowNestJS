import { Entity, PrimaryColumn } from 'typeorm';

@Entity('composition_plat_ingredient')
export class CompoPlatIngredientEntity {
	@PrimaryColumn()
	plat_id: string;

	@PrimaryColumn()
	ingredient_id: number;
}