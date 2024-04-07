// Richiedo all'utente di inserire gli elementi dell'array separati da virgola
const inputArray = prompt("Inserisci gli elementi dell'array separati da virgola:");
console.log("Elementi inseriti dall'utente:", inputArray);

// Converto la stringa di input in un array
const elements = inputArray.split(",");
console.log("Array creato:", elements);

// Rimuovo l'ultimo elemento dall'array
const newArray = rimuoviDallaCoda(elements);
console.log("Nuovo array senza l'ultimo elemento:", newArray);

// Mostro il risultato all'utente
alert(`Il nuovo array senza l'ultimo elemento è: ${newArray}`);
