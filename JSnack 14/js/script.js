// Richiedo all'utente di inserire gli elementi dell'array separati da virgola
const inputArray = prompt("Inserisci gli elementi dell'array separati da virgola:");
console.log("Elementi inseriti dall'utente:", inputArray);

// Converto la stringa di input in un array
const elements = inputArray.split(",");
console.log("Array creato:", elements);

// Rimuovo il primo elemento dall'array
const newArray = rimuoviDallaTesta(elements);
console.log("Nuovo array senza il primo elemento:", newArray);

// Mostro il risultato all'utente
alert(`Il nuovo array senza il primo elemento è: ${newArray}`);
