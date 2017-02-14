
//Déclaration d'un objet
var monObj = {
	nom: "GAUCHARD",
	prenom: "Yoann",
	age: 30
}

console.log(monObj.nom);

for (prop in monObj) {
	console.log(prop); //affiche le nom de la propriété de l'objet
	console.log(monObj[prop]); //affiche la valeur de la propriété
} 


//Fonctions :

//Déclaration d'une fonction
function maFonction() {
	console.log('tu es dans ma fonction');
}

//Appel de la fonction
maFonction();


//Fonction avec return
var x = 2; //variable globale
var y = 5; //variable globale
function maDeuxiemeFonction() {
	var z = 4; //variable locale à la fonction (on ne s'en sert que dedans);
	console.log("val de z au sein de son scope : " + z);
	return x * y;
}

var resultat = maDeuxiemeFonction();
console.log(resultat);
console.log("val de z en dehors de son scope : " + z); // ne peut pas s'afficher
// car la portée de la variable z ne vas au-delà de la fonction où elle est déclarée.


//Fonction avec arguments
function maTroisiemeFonction($arg1, $arg2) {
	return $arg1 * $arg2;
}

var resultat2 = maTroisiemeFonction(10, 20);
console.log(resultat2);

//Déclaration d'un objet avec une méthode adresse
var monObj2 = {
	nom: "HAMELIN",
	prenom: "Paul",
	age: 18,
	adresse = function() {
		return "44 rue du paradis";
	}
}

console.log(monObj2.adresse());



