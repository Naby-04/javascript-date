// Pour commencer recuperons la date
let today_Date = Date.now()
// a noter Cette fonction permet de créer un nouvel objet Date.
// .now Renvoie la valeur numérique correspondant au moment présent

// ----------------------------------------------

// maintenant affectons des variables au differents elements composant la date

let jour_semaine = Date.prototype.getDay();
// Renvoie le jour de la semaine (entre 0 et 6) pour la date donnée, selon le temps local.

let jour = Date.prototype.getDate();
// Renvoie le jour du mois (entre 1 et 31) pour la date donnée, selon le temps local.

let mois = Date.prototype.getMonth();
// Renvoie le mois (entre 0 et 11) pour la date donnée, selon le temps local.

let année = Date.prototype.getFullYear();
// Renvoie l'année (sans chiffre implicite, 1999 sera renvoyé et pas 99 par exemple) pour la date donnée, selon le temps local.


// ----------------------------------------------

// ----------------------------------------------
// procedons à l'ecriture en lettre de nos valeurs
let JOUR_SEMAINE = ["Dimanche" , "Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi"];
let MOIS = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];

jour_semaine = JOUR_SEMAINE[jour_semaine];
// en faisant cela l'index correspondant au jour de la semaine prendra la valeur de la valeur correspoundant dans notre tableau
mois = MOIS[mois];
// ----------------------------------------------


document.getElementById("date").innerHTML= jour_semaine + "le " + jour + " " + mois " " + année ;

