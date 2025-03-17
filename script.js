// Definisco le variabili
const priceKm = 0.21;
let chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere")
let age = prompt ("Inserisci l'età del passeggero")
// prezzo base senza scontistiche
let price = chilometri * priceKm;
// Definisco la variabile di prezzo finale
let finalPrice
// prima scontistica 20%
if (age < 18) {
    finalPrice = price - price * 20 / 100;
}
// seconda scontistica 40%
else if ( age > 65) {
    finalPrice = price - price * 40 / 100
}
// prezzo FINALE senza sconti
else{
    finalPrice = price;
}
// Il console log per visualizzare il prezzo finale con i decimali
console.log(`Il prezzo è di ${finalPrice.toFixed(2)} \u20AC`)
