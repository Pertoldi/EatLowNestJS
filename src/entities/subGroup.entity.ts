import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sous_groupe')
export class SubGroupEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;
}