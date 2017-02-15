
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
//console.log("val de z en dehors de son scope : " + z); // ne peut pas s'afficher
// car la portée de la variable z ne vas au-delà de la fonction où elle est déclarée.


//Fonction avec arguments
function maTroisiemeFonction(arg1, arg2) {
	return arg1 * arg2;
}

var resultat2 = maTroisiemeFonction(10, 20);
console.log(resultat2);

//Déclaration d'un objet avec une méthode adresse
var monObj2 = {
	nom: "HAMELIN",
	prenom: "Paul",
	age: 18,
	adresse: function() {
		return "44 rue du paradis";
	}
}
console.log(monObj2.adresse());

//Ajout d'une propriété et d'une méthode à mon objet "monObj2"
monObj2.codePostal = 72000;
monObj2.nomComplet = function() {
	return this.nom + " " + this.prenom;
}
console.log(monObj2);
console.log(monObj2.nomComplet());

//Objet calculette
var calculette = {
	addition: function(nb1, nb2) {
		res = parseInt(nb1) + parseInt(nb2);
		return res;
	},
	soustraction: function(nb1, nb2) {
		return parseInt(nb1) - parseInt(nb2);
	},
	multiplication: function(nb1, nb2) {
		return parseInt(nb1) * parseInt(nb2);
	},
	division: function(nb1, nb2) {
		return parseInt(nb1) / parseInt(nb2);
	}
}

var operation = prompt("Entrer une opération.");
var nombre1 = prompt("Entrer un premier nombre");
var nombre2 = prompt("Entrer un deuxième nombre");

if(operation === "+" || operation === "addition") {

	alert(calculette.addition(nombre1, nombre2));

} else if (operation === "-" || operation === "soustraction") {

	alert(calculette.soustraction(nombre1, nombre2));

} else if (operation === "*" || operation === "multiplication") {

	alert(calculette.multiplication(nombre1, nombre2));

} else if(operation === "/" || operation === "division") {

	alert(calculette.division(nombre1, nombre2));

} else {

	alert("Je ne peux pas effectuer votre demande.");

}


switch (operation) {

	case "+": alert(calculette.addition(nombre1, nombre2)); break;
	case "-": alert(calculette.soustraction(nombre1, nombre2)); break;
	case "*": alert(calculette.multiplication(nombre1, nombre2)); break;
	case "/": alert(calculette.division(nombre1, nombre2)); break;

	case "addition": alert(calculette.addition(nombre1, nombre2)); break;
	case "soustraction": alert(calculette.soustraction(nombre1, nombre2)); break;
	case "multiplication": alert(calculette.multiplication(nombre1, nombre2)); break;
	case "division": alert(calculette.division(nombre1, nombre2)); break;

	default: alert("Je ne peux pas effectuer votre demande"); break;
}

//Objet avec constructeur
function monObjConstructeur(nom, prenom, age) {
	this.nom = nom;
	this.prenom = prenom;
	this.age = age;
}

//Instanciation d'un objet avec un constructeur
monObj3 = new monObjConstructeur("GAUCHARD", "Yoann", 30 + "ans");
alert(monObj3.nom + " " + monObj3.prenom + "de l'age de " + monObj3.age);










