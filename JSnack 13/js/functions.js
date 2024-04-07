/**
 * Restituisce un nuovo array con tutti gli elementi dell'array originale, tranne l'ultimo.
 * @param {Array} array - L'array di elementi da cui rimuovere l'ultimo elemento.
 * @returns {Array} - Il nuovo array senza l'ultimo elemento.
 */
function rimuoviDallaCoda(array) {
    return array.slice(0, -1);
}
