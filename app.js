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


const playArea = document.querySelector('.play-area');
const playButton = document.querySelector('#play-button');
const resultArea = document.querySelector('.result-area');
const sendNumberButton = document.querySelector('#submit-user-number');

playArea.innerHTML += `${numeri}`;

function askUserNumber () {
    const inputNumeroUtente = document.querySelector('.input-area');
    inputNumeroUtente.style.display = 'inline-block';
}

function getUserNumber () {
    const numeriUtente = document.querySelectorAll('.user-number').value;
    console.log(numeriUtente); 
    // qui il query selector mi da undefined  

    resultArea.innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri, tra i quali: ${numeriIndovinati}`;
}

playButton.addEventListener('click', function() {
    playArea.style.display = 'none';

    const myTimeout = setTimeout(askUserNumber, 5000);
})

sendNumberButton.addEventListener('click', function() {
    getUserNumber ();
})










































