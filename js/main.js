// // Esercizio 1
// var numero1 = parseInt(prompt("Inserisci un numero"));
// var numero2 = parseInt(prompt("Inseriscine un altro"));
// if (numero1 > numero2){
// document.getElementById("h1").innerHTML = "Il primo numero è il maggiore.";
// }
// else if (numero2 > numero1){
// document.getElementById("h1").innerHTML = "Il secondo numero è il maggiore.";
// }
// else{
// document.getElementById("h1").innerHTML = "I due numeri sono uguali";
// }


// ESERCIZIO 2
// var parola1 = prompt("Scrivi una parola");
// var parola2 = prompt("Scrivi un'altra parola");
// if (parola1.length > parola2.length){
// document.getElementById("h1").innerHTML = parola2 + " " + parola1;
// }
// else if (parola2.length > parola1.length ){
// document.getElementById("h1").innerHTML = parola1 + " " + parola2;
// }
// else{
// document.getElementById("h1").innerHTML = "Le due parole sono di egual misura" ;
// }

//    ESERCIZIO 3
// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("Ciao, inserisci un numero"));
//   somma = somma + numero;
//   document.getElementById("h1").innerHTML = somma;
// }

//           ESERCIZIO 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
// Chiedi all’utente il suo nome
// Comunicagli se può partecipare o no alla festa.
// var invitati = ["paolo", "fabio" , "lorenzo"];
// var nomeUtente = prompt("Ciao, puoi inserire il tuo nome?");
// var ok = false;
// for (var i = 0; i < invitati.length; i++) {
//     if ( nomeUtente == invitati[i] ) {
//       ok = true;
//     }
// }
// if (ok == true) {
//   document.getElementById("h1").innerHTML = "Ok, sei tra gli invitati"
// }
// else {
// document.getElementById("h1").innerHTML = "Non risulti tra gli invitati"
// }

//           ESERCIZIO 5
// Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero
//  Se è dispari inseriscilo nell’array
// var array = [];
// for (var i = 0; i < 6; i++) {
//   var numero = parseInt(prompt("Inserisci un numero"));
//   if (numero % 2 != 0) {
//     array.push(numero);
//   }
// }
// document.getElementById("h1").innerHTML = array;
