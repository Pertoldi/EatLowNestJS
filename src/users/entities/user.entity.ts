import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('utilisateur')
export class UserEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nom: string;

	@Column()
	prenom: string;

	@Column()
	email: string;

	@Column()
	password: string;
}