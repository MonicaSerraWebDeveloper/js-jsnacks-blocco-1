// Calcola la somma e la media dei primi 10 numeri.

const listNumber = 10; // Creiamo la lista di numeri da 1 a 10

console.log(listNumber);

let sum = 0
for (let i = 0; i <= listNumber; i++) {
    sum = sum + i // Facciamo la somma di ogni numero 
}

console.log(sum);

const takeTheAverage = sum / listNumber // Dividiamo per il numero di cifre 

console.log(takeTheAverage); // Stampare il numero finale che è la media 



