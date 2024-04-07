// Richiedo all'utente di inserire gli elementi dell'array separati da virgola
const inputArray = prompt("Inserisci gli elementi dell'array separati da virgola:");
console.log("Elementi inseriti dall'utente:", inputArray);

// Converto la stringa di input in un array
const elements = inputArray.split(",");
console.log("Array creato:", elements);

// Ottengo la stringa contenente tutti gli elementi separati da virgola
const outputString = stampa(elements);
console.log("Stringa contenente gli elementi dell'array:", outputString);

// Mostro il risultato all'utente
alert(`Gli elementi dell'array sono: ${outputString}`);
