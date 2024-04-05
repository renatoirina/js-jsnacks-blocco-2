// Funzione per generare gli array casuali e stamparli a schermo
function generateArrays() {
    // Recupero il numero di array dall'utente
    const numArrays = parseInt(document.getElementById("numArrays").value);

    // Controllo se il valore inserito è un numero valido
    if (isNaN(numArrays) || numArrays <= 0) {
        alert("Inserisci un numero valido per generare gli array.");
        return;
    }

    // Ottengo l'elemento di output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Pulisco l'output precedente

    // Genero e stampo gli array casuali
    for (let i = 0; i < numArrays; i++) {
        const randomArray = generateRandomArray(10, 1, 100);
        const arrayParagraph = document.createElement("p");
        arrayParagraph.textContent = "Array " + (i + 1) + ": " + randomArray.join(", ");
        outputDiv.appendChild(arrayParagraph);
    }
}
