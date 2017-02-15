
tab = ["Fraise", "Banane", "Poire", "Pomme", "Cerise", "Abricot","Pêche","Carambole"];

//Afficher la taille d'un tableau
console.log(tab.length);

//Accéder au premier élément de mon tableau
console.log(tab[0]); 

//Afficher l'ensemble de mon tableau
function afficherTab() {
	for(index in tab) {
		console.log(tab[index]);
	}
}

//Ajouter un élement dans mon tableau
tab[5] = "Noix de Coco";
console.log(tab);

//Ajouter un élément à la suite de mon tableau
tab.push("Passion");
console.log(tab);

//Supprimer le premier élément d'un tableau
tab.shift();
var premierElmt = tab.shift();
console.log(premierElmt);

//Supprimer le dernier élément de mon tableau 
tab.pop();
var dernierElmt = tab.pop();
console.log(tab);
console.log("dernier élément retiré : " + dernierElmt);

//Supprimer plusieurs éléments
tabElmtSuppr = tab.splice(1,3);
console.log(tabElmtSuppr);

//Retourner l'ensemble des éléments du tableau sous forme d'une chaîne de caractères avec un séparateur
console.log(tab.join(" - "));

//Ajouter des éléments ou des tableaux à notre tableau
fruitsExotiques = ["Passion", "Mangue", "Noix de Coco"];
console.log(tab.concat("Cerise", fruitsExotiques, "Kiwi"));

//Inverser l'ordre des éléments dans mon tableau
console.log(tab.reverse());

//Trié notre tableau
console.log(tab.sort());


//Trié un tableau d'objet en fonction d'une des propriétés de ces objets
var cars = [
	{type:"Volvo", year:2016},
	{type:"Saab", year:2001},
	{type:"BMW", year:2010}
];

console.log(
	cars.sort(
		function(a, b) {
			return a.year - b.year;
		}
	)
);

//Accéder à la propriété type du troisième objet de mon tableau trié "cars"
console.log(cars[2].type);

//Retirer certains éléments de mon tableau
console.log(tab);
console.log(tab.slice(2,4));







