function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeri = [];

while (numeri.length < 5) {
    const numero = getRandomInt(1, 100);

    if (!numeri.includes(numero)) { 
        numeri.push(numero);
    }
}
// console.log(numeri);
let numeriIndovinati = [];



alert(numeri)

const myTimeout = setTimeout(getUserNumber, 5000);

function getUserNumber () {
    for (i = 0; i < 5; i++) {
        const numeroUtente = parseInt(prompt("inserisci un numero"));
        if (numeri.includes(numeroUtente)) {
            numeriIndovinati.push(numeroUtente);
        }
    }
}



































