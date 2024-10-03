let JOUR_SEMAINE = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
let MOIS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
let date = new Date();
document.querySelector("#date").innerHTML =
  " " +
  JOUR_SEMAINE[date.getDay()] +
  " le " +
  date.getDate() +
  " " +
  MOIS[date.getMonth()] +
  " " +
  date.getFullYear();

function afficher() {
  document.querySelector(".answer").style.display = "block";
}
// document.getElementById("date") = document;
