// 4 manières de créer une date

date1 = new Date(); //date du jour
date2 = new Date("2016-12-31");
date3 = new Date(1487167671147); // création d'une date avec un entier timestamp
// création de la date le 04/11/2016 à 17 heures, 22 minutes, 34 secondes et 234 millisecondes
date4 = new Date(2016, 11, 4, 17, 22, 34, 234);


// Méthode de l'objet Date

//Afficher la date du jour
console.log(
	date1.getDate() + "/" +
	(date1.getMonth() + 1) + "/" +
	date1.getFullYear() + " " +
	date1.getHours() + " h " +
	date1.getMinutes()
)

//Afficher le timestamp de la date du jour
console.log(date1.getTime());

//Exercice :

// 1 - Soustraire 3 heures à la date du jour et afficher cette nouvelle date

// 2 - Additionner 7 jours à la date du jour et afficher cette nouvelle date

// 3 - Afficher le nombre de jour entre la date du jour et le 31/12/2016

