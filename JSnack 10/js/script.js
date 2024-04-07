// Chiedo all'utente di inserire gli elementi dell'array separati da virgola
const inputArray = prompt("Inserisci gli elementi dell'array separati da virgola:");
console.log("Elementi inseriti dall'utente:", inputArray);

// Converto la stringa di input in un array
const elements = inputArray.split(",");
console.log("Array creato:", elements);

// Conto il numero di elementi nell'array
const count = countElements(elements);
console.log("Numero di elementi nell'array:", count);

// Mostro il risultato all'utente
alert(`Il numero di elementi nell'array è: ${count}`);
