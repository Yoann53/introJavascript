var i = 2;
var x;
var y = "salut";

/*
	Les opérateurs de comparaison :
	== équivaut en valeur,
	!= différent en valeur,
	<= inférieur ou égal en valeur,
	>= supérieur ou égal en valeur,
	=== équivaut en valeur et en type,
	!== différent en valeur et en type
*/

//Conditions :
if (i === "2") {
	console.log("instruction 1 lorsque la condition évaluée est vrai.");
} else {
	console.log("instruction 1 lorsque la condition évaluée est fausse.");
}

//La machine évalue la condition i <= "2" au départ puis son résultat avec 2
if (i <= "2" === 2 === false && y === "salut" || 2 === x) {
	console.log("instruction 2 lorsque la condition évaluée est vrai.");
} else {
	console.log("instruction 2 lorsque la condition évaluée est fausse.");
}

if (i != 2) {
	console.log("instruction 3 du if");
} else if (x === undefined) {
	console.log("instruction 3 du else if");
} else {
	console.log("instruction 3 du else");
}

//Les boucles :
var z = 0;
while (z < 10) {
	z++; //ajoute 1 à z
	console.log("la valeur de i la première fois dans la boucle : " + i);
	y += 2; // concatène 2 à y
	console.log("la valeur de y : " + y);
	i -= 2; // soustrait i de 2
	console.log("la valeur de i la deuxième fois dans la boucle : " + i);
}

for (var p = 0, max = 10; p < max; p++) {
	console.log("la valeur de p : " + p );
}

//Les tableaux :
var tab = ["salut", "hello", "buenos dias", "hallo"];

for (index in tab) {
	console.log(index);
	console.log(tab[index]);
}







