// funzione numero random  
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



// recupero elementi html  
const playArea = document.querySelector('.play-area');
const playButton = document.querySelector('#play-button');
const resultArea = document.querySelector('.result-area');
const sendNumberButton = document.querySelector('#submit-user-number');

playArea.innerHTML += `Memorizza questi numeri: ${numeri}`;



// creazione array numeri inseriti dall'utente e numeri indovinati 
let valoriUtente = [];
let numeriIndovinati = [];

// funzioni per chiedere numeri all'utente e controllare  
function askUserNumber () {
    const inputNumeroUtente = document.querySelector('.input-area');
    inputNumeroUtente.style.display = 'inline-block';
}

function getUserNumber () {
    let numeriUtente = document.querySelectorAll('.user-number');
    for(let i = 0; i < numeriUtente.length; i++){
        let newValue = numeriUtente[i].value;
        valoriUtente.push(newValue);
    }

    console.log(valoriUtente); 
    valoriUtente.forEach(element => {
        if (numeri.includes(parseInt(element))) {
            numeriIndovinati.push(element);
        }
    }) 

    resultArea.innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri, tra i quali: ${numeriIndovinati}`;
}


// eventi al click 
playButton.addEventListener('click', function() {
    playArea.style.display = 'none';
    playButton.style.display = 'none';

    const myTimeout = setTimeout(askUserNumber, 30000);
})

sendNumberButton.addEventListener('click', function() {
    getUserNumber ();
})










































