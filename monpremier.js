
// je suis un commentaire

/* je suis un commentaire
sdqklfjmldkfsjgmlsdfjkgmslkdjgmlsdkjgfmldsjfgmsdg
sur plusieurs ligne */

alert("C'est moi qui est le dernier mot !");

//Deux grands types de variables en javascript : les variable de type string et les variable de type number

//les strings :
var toto = "c'est moi toto" + " et moi je me suis greffé à lui !";
var titi = " Et titi est là maintenant. ";
//
var totoTiti = toto + titi;
//ce code :
//totoTiti = totoTiti + "ça c'est le dernier bout";
//équivaut à celui-ci :
totoTiti += " ça c'est le dernier bout.";
alert(totoTiti);

//les numbers :
var x = 5;
var y = -0.5765865;
alert(x * y);

var addition = x + y;
alert(addition);

var chaine = addition + "un nombre concaténé avec un nombre donne une chaîne";
alert(chaine);

//La fonction prompt pour demander une valeur à l'utilisateur
var nom = prompt("Entrer votre nom :");
alert(nom);

//Not a Number
var test = NaN;
alert(test);

var test2 = null;
alert(test2);

var test3 = undefined;
alert(test3);

//Déclaration de plusieurs variables à la fois
var var1, var2 = "string", var3 = NaN;
alert(var1 + var2 + var3);

//utilisation du mot clé typeof
alert(
	typeof totoTiti + "\n" +
	typeof x + "\n" +
	typeof test + "\n" +
	typeof test2 + "\n" +
	typeof test3
);

//Affichage dans la console
console.log("Salut, je m'affiche dans la console ! Big Up !");

