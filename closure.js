// une fonction dans une fonction

function maFonction1() {
	var a = 2;

	function maFonction2() {
		return a * a;
	}

	return maFonction2();
}

console.log(maFonction1()); // je peux appeler la fonction1 car elle est déclarée dans
// mon contexte général, par contre je ne peux pas appeler la foncton2 car elle est déclarée
// dans une fonction et connue uniquement dans le contexte de celle-ci.


// fonction anonyme
var variableContenantUneFonctionAnonyme = function() {
	var i = 2;
	return i * i;
}
console.log(variableContenantUneFonctionAnonyme());

// fonction anonyme auto-invoquée
(function(x){
	alert(x * x);
})(3);

// Closure 
function compteur() {
	var i = 0;

	return function(){
		return i++;
	}
}

alert(compteur());

var compteur1 = compteur(); // stock la fonction anonyme renvoyée dans compteur1
var compteur2 = compteur();
var compteur3 = compteur();

console.log(compteur1()); // exécution de la fonction anonyme
console.log(compteur1());
console.log(compteur1());
console.log(compteur2());
console.log(compteur2());
console.log(compteur2());
console.log(compteur2());
console.log(compteur2());
console.log(compteur3());
console.log(compteur3());
console.log(compteur1());













