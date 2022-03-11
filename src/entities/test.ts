import mysql from 'mysql2';

export function test() {
	//Connexion à la base de données
	const db = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eatlow',
		charset: `utf8`
	})

	db.connect((err) => {
		if (err) {
			console.log('Connexion à Mysql échouée !');
			throw err
		}
		console.log('Connexion à MySQL réussi !')
	})


	console.log(
		db.query("select * from plat")
	);
}
