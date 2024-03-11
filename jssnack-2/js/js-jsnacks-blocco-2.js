// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Chiediamo all'utente di dirci un numero per 5 volte con un prompt

let sum = 0;
for (let i = 0; i < 5; i++) {
    const userMessage = parseInt(prompt('Scrivi un numero'));
    console.log(userMessage);
}

// Facciamo la somma di tutti i numeri inseriti 
// Stampiamo la somma finale 