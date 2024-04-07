// Richiedo all'utente di inserire gli elementi dell'array separati da virgola
const inputArray = prompt("Inserisci gli elementi dell'array separati da virgola:");
console.log("Elementi inseriti dall'utente:", inputArray);

// Converto la stringa di input in un array
const elements = inputArray.split(",");
console.log("Array creato:", elements);

// Richiedo all'utente di inserire l'elemento da cercare nell'array
const targetElement = prompt("Inserisci l'elemento da cercare nell'array:");
console.log("Elemento da cercare:", targetElement);

// Trovo l'indice dell'elemento nell'array
const index = trovaIndice(elements, targetElement);
console.log("Indice dell'elemento nell'array:", index);

// Mostro il risultato all'utente
if (index !== -1) {
    alert(`L'elemento ${targetElement} si trova all'indice ${index} nell'array.`);
} else {
    alert(`L'elemento ${targetElement} non è presente nell'array.`);
}
