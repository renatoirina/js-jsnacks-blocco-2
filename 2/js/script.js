// Funzione per gestire il click del pulsante
function handleButtonClick() {
    // Recupero le parole inserite dall'utente
    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;

    // Verifico la lunghezza delle parole
    const result = checkWordLength(word1, word2);

    // Mostro il risultato all'utente
    document.getElementById("result").innerText = "Risultato: " + result;

    // Aggiungo console.log per il debugging
    console.log("Parola 1:", word1);
    console.log("Parola 2:", word2);
    console.log("Risultato:", result);
}
