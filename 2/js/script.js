// Funzione per gestire il click del pulsante
function handleButtonClick() {
    // Recupera le parole inserite dall'utente
    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;

    // Verifica la lunghezza delle parole
    const result = checkWordLength(word1, word2);

    // Mostra il risultato all'utente
    document.getElementById("result").innerText = "Risultato: " + result;

    // Aggiungi console.log per il debugging
    console.log("Parola 1:", word1);
    console.log("Parola 2:", word2);
    console.log("Risultato:", result);
}
