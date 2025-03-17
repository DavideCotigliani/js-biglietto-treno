//Definisco le variabili
let prezzoBiglietto = 0.21 * 100;
let primoSconto = prezzoBiglietto - prezzoBiglietto * 20 / 100;
let secondoSconto = prezzoBiglietto - prezzoBiglietto * 40 / 100; 
let prezzofinale
let distanceUser = prompt ("Inserisci i chilometri da percorrere")
let ageUser = prompt (`Inserisci la tua età`)

// inserisco i valori inseriti e calcolo le scontistiche

if (distanceUser && ageUser === primoSconto){
prezzofinale = prezzoBiglietto - primoSconto;
}

else if (distanceUser && ageUser === secondoSconto){
    prezzofinale = prezzoBiglietto
}