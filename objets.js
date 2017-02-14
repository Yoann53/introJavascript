
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
var x = 2;
var y = 5;
function maDeuxiemeFonction() {
	return x * y;
}

var resultat = maDeuxiemeFonction();
console.log(resultat);


//Fonction avec arguments
function maTroisiemeFonction($arg1, $arg2) {
	return $arg1 * $arg2;
}

var resultat2 = maTroisiemeFonction(10, 20);
console.log(resultat2);







