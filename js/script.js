/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

*/

// dichiaro le variabili per km percorsi ed età del passeggero
const km = parseInt(prompt('Inserire numero di chilometri da percorrere (sono ammessi solo numeri)'));
const eta = parseInt(prompt("Inserire l'eta (sono ammessi solo numeri)"));

//variabile per il prezzo per km
const prezzoBiglietto = km * 0.21;

//variabili sconto
const scontoMin = 0.20;
const scontoOver = 0.40;

//varabili sconto applicato
let scontoMinApplicato;
let scontoOverApplicato;

//variabile prezzo totale
let prezzoTotale;

if(isNaN(eta) || isNaN(km)){
    document.getElementById('app').innerHTML = 
    `
    <h1 class="text-danger fw-bold"> Inserire dati validi (solo numeri). </h1>
    `;
} else if (eta < 18) {
    scontoMinApplicato = prezzoBiglietto * scontoMin,
    prezzoTotale = prezzoBiglietto - scontoMinApplicato,
    document.getElementById('app').innerHTML += 
    `
    <p class="text-white fw-bold text-center fs-1">${prezzoTotale}&euro;<p>
    `;
} else if (eta > 64) {
    scontoOverApplicato = prezzoBiglietto * scontoOver,
    prezzoTotale = prezzoBiglietto - scontoOverApplicato,
    document.getElementById('app').innerHTML += 
    `
    <p class="text-white fw-bold text-center fs-1">${prezzoTotale}&euro;<p>
    `;
}
else {
    prezzoTotale = prezzoBiglietto,
    document.getElementById('app').innerHTML += 
    `
    <p class="text-white fw-bold text-center fs-1">${prezzoTotale}&euro;<p>
    `;
}