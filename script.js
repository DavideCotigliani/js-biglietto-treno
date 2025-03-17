//Definisco le variabili
const prezzoKm = 0.21;
let chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere")
let age = prompt ("Inserisci l'età del passeggero")

// prezzo base senza scontistiche
let price = chilometri * prezzoKm;

// prezzo finale
let finalPrice

// prima scontistica 20%
if (age < 18) {
    finalPrice = price - price * 20 / 100;
}

// seconda scontistica 40%
else if ( age > 65) {
    finalprice = price - price * 40 / 100
}

// prezzo FINALE senza sconti
else{
    finalPrice = price;
}
// per visualizzare il prezzo finale
console.log(`Il prezzo è di ${finalPrice}`)
