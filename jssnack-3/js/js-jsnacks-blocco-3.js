// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const listNumber = [] // Creiamo una lista vuota pronta per essere riempita

for (let i = 0; i < 6; i++) { 
    const userMessage = parseInt(prompt('Scrivi un numero'));
    console.log(userMessage); // Chiediamo 6 volte all'utente di inserire un numero

    if (userMessage % 2 === 1) { 
        listNumber.push(userMessage) // Scriviamo nella lista solo i numeri dispari che ci dice l'utente
    }
}

console.log(listNumber);

