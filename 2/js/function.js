/**
 * Verifica se due parole hanno la stessa lunghezza e restituisce il risultato.
 * @param {string} word1 - La prima parola.
 * @param {string} word2 - La seconda parola.
 * @returns {string} - La parola con la lunghezza maggiore o entrambe se hanno la stessa lunghezza.
 */
function checkWordLength(word1, word2) {
    if (word1.length === word2.length) {
        return word1 + " " + word2;
    } else if (word1.length > word2.length) {
        return word1;
    } else {
        return word2;
    }
}
