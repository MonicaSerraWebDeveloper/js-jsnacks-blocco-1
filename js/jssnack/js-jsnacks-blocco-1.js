// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

const numbers = []; // Creiamo la nostra lista vuota

for (let i = 0; i < 5; i++) {
    const messageInputNumber = parseInt(prompt('Scrivi un numero'));
    console.log(messageInputNumber);
}; // Chiediamo all'utente 5 numeri con un ciclo for


// Inseriamo i 5 numeri nell'array vuoto
// Verifichiamo che il numero scritto non sia già presente nell'array