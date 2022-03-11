import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cout_energetique')
export class EnergyCostEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	agriculture: string;

	@Column()
	transformation: string;

	@Column()
	emballage: string;

	@Column()
	transport: string;

	@Column()
	supermarche: string;

	@Column()
	consommation: string;
}

export class EnergyCost {
	constructor(
		public id: number,
		public agriculture: number,
		public transformation: number,
		public packaging: number,
		public transport: number,
		public supermarket: number,
		public consomation: number,
	) { }
}
