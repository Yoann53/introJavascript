// 4 manières de créer une date

var date1 = new Date(); //date du jour
var date2 = new Date("2016-12-31");
var date3 = new Date(1487167671147); // création d'une date avec un entier timestamp
// création de la date le 04/11/2016 à 17 heures, 22 minutes, 34 secondes et 234 millisecondes
var date4 = new Date(2016, 11, 4, 17, 22, 34, 234);


// Méthode de l'objet Date

//Afficher la date du jour
console.log(
	date1.getDate() + "/" +
	(date1.getMonth() + 1) + "/" +
	date1.getFullYear() + " " +
	date1.getHours() + " h " +
	date1.getMinutes()
)

//Afficher le timestamp (millisecondes) à partir d'une date donnée
console.log(date1.getTime());

//Exercice :

// 1 - Soustraire 3 heures à la date du jour et afficher cette nouvelle date

//version timestamp
var timestampDuJour = date1.getTime();
var newTimestamp = timestampDuJour - (3 * 3600 * 1000);
var nouvelleDate = new Date(newTimestamp);
console.log(
	nouvelleDate.getDate() + "/" +
	(nouvelleDate.getMonth() + 1) + "/" +
	nouvelleDate.getFullYear() + " " +
	nouvelleDate.getHours() + " h " +
	nouvelleDate.getMinutes()
)

//version avec changement de l'heure
var heure = date1.getHours() - 3;
date1.setHours(heure);
console.log(
	date1.getDate() + "/" +
	(date1.getMonth() + 1) + "/" +
	date1.getFullYear() + " " +
	date1.getHours() + " h " +
	date1.getMinutes()
)

// 2 - Additionner 17 jours à la date du jour et afficher cette nouvelle date
var dateDuJour = new Date();
var timeStamp = dateDuJour.getTime();
timeStamp += 17 * 24 * 3600 * 1000;
var date5 = new Date(timeStamp);
console.log(
	date5.getDate() + "/" +
	(date5.getMonth() + 1) + "/" +
	date5.getFullYear() + " " +
	date5.getHours() + " h " +
	date5.getMinutes()
)

// 3 - Afficher le nombre de jour entre la date du jour et le 31/12/2016
nbJourTimestamp = dateDuJour.getTime() - date2.getTime();
nbJour = nbJourTimestamp / (24 * 3600 * 1000);
console.log(nbJour.toString().substring(0,2));







