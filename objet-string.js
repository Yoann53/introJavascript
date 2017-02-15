//Instanciation de l'objet string
maChaine = new String("Voici ma chaine de caractères");

console.log(maChaine);

//Afficher la taille de notre chaine de caractère
console.log(maChaine.length);

//Afficher la chaine de caractère en minuscule
console.log(maChaine.toLowerCase());

//Afficher la chaine de caractère en majuscule
console.log(maChaine.toUpperCase());

//Utilisation de la méthode substring pour récupérer une partie de ma chaîne de caractère
console.log(maChaine.substring(0,5));

//Utilisation de la méthode replace pour remplacer une partie de notre chaîne
console.log(maChaine.replace("Voici", "Voilà"));

//Renvoyer la position du mot "de"
console.log(maChaine.search("de"));

//Afficher "ma chaine" avec la fonction substr
console.log(maChaine.substr(6, 9));

//Est-ce que ma chaîne contient le mot "rac"
console.log(maChaine.match("rac"));
//Renvoyer sa position
console.log(maChaine.match("rac").index);

//Renvoyer un tableau avec un mot de ma chaîne dans chaque case
console.log(maChaine.split(" "));


maChaine2 = "Voilà ma deuxième chaîne";
console.log(maChaine2.length);

