// Calcola la somma e la media dei primi 10 numeri.

const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Creiamo la lista di numeri da 1 a 10


console.log(listNumber);

let sum = 0
for (let i = 0; i < listNumber.length; i++) {
    sum = sum + listNumber[i] // Facciamo la somma di ogni numero 
}

console.log(sum);

const takeTheAverage = sum / listNumber.length // Dividiamo per il numero di cifre 

console.log(takeTheAverage); // Stampare il numero finale che è la media 



