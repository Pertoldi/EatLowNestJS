import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('utilisateur')
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;

	@Column()
	prenom: number;

	@Column()
	email: number;

	@Column()
	password: number;
}