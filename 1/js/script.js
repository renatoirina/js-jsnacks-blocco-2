/**
 * Genera un array di numeri casuali compresi tra min e max.
 * @param {number} length - La lunghezza dell'array.
 * @param {number} min - Il numero minimo.
 * @param {number} max - Il numero massimo.
 * @returns {number[]} - L'array di numeri casuali.
 */
function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}
