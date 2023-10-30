// Variabili globali per il gioco
let arrayBombs = [];
let maxClicks 
let arrayNoBombs
// let cellResult

// ESECUZIONE
function playGame(event) {
    wrapperElem.classList.remove("hidden");
    event.preventDefault();
    console.log(this);
    // Impedimento di più creazioni di wrapper e reset arrayNoBombs e resultGame
    arrayNoBombs = [];
    wrapperElem.innerHTML = "";
    resultGame.innerHTML = "";
    // Livelli Difficoltà
    const level = document.getElementById("difficolta").value;
    let numberInnerCell = "";
    let numbersOfCell = "";
    switch (level) {
        case "1":
            numberInnerCell = 100;
            numbersOfCell = 10;
            break;
        case "2":
            numberInnerCell = 81;
            numbersOfCell = 9;
            break;
        case "3":
            numberInnerCell = 49;
            numbersOfCell = 7;
            break;
        default:
            numberInnerCell = 100;  
            numbersOfCell = 10;     
    }
    // Generazione Bombe
    const bombs = generateArrayBombs(numberInnerCell);
    maxClicks = numberInnerCell - bombs.length;
    console.log(bombs, maxClicks);
    // Inserimento di numeri nella cella compresi tra 1 e X
    for (let i = 1; i <= numberInnerCell; i++) {
        const numbers = i;
        // console.log(numbers);
        cellResult = generateCell(numbers, numbersOfCell);
        // console.log(cellResult);
        cellResult.addEventListener("click", myCellClick);
        // Assegnazione della cella al wrapper
        wrapperElem.append(cellResult);
    }
    
}

// Definizione di wrapper
const wrapperElem = document.querySelector(".wrapper");
console.log(wrapperElem);

// Button start
const play = document.querySelector(".start");
play.addEventListener("click", playGame);
console.log(play);

// Result game
let resultGame = document.querySelector(".result-game");



// FUNCTIONS
/**
 * Description: Funzione per generare le celle con un numero all'interno
 * @param {number} cellNumber
 * @returns {any} div con all'interno un numero
 */
function generateCell(cellNumber, numbersOfCell) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `calc(100% / ${numbersOfCell})`;
    cell.style.height = `calc(100% / ${numbersOfCell})`;
    cell.innerHTML = cellNumber;
    return cell;
}
console.log(generateCell(20));

// Eventi al Click sulla cella
function myCellClick() {
    console.clear()
    const clickedNumber = this.textContent;
    console.log(clickedNumber);
    const cellCounter = document.querySelectorAll(".cell");
    for (i = 0; i < cellCounter.length; i++) 
    if (arrayBombs.includes(parseInt(clickedNumber))) {
        this.classList.add("red");
        resultGame.innerHTML = `<h1 class="text-danger"> Hai perso! Il tuo punteggio è: <span class="text-warning">${arrayNoBombs.length}</span></h1>`;
        cellCounter[i].removeEventListener("click", myCellClick);
    } else {
        this.classList.add("lightblue");
        if (!arrayNoBombs.includes(clickedNumber)) {
            arrayNoBombs.push(clickedNumber);
            console.log(arrayNoBombs);
            
            if (arrayNoBombs.length == maxClicks) {
                resultGame.innerHTML = `<h1 class="text-success"> Hai vinto! Il tuo punteggio è: <span class="text-warning">${arrayNoBombs.length}</span></h1>`;
                cellCounter[i].removeEventListener("click", myCellClick);
            }
        }
    }  
}


/**
 * Description: Generare un numero random compreso tra min e ax
 * @param {any} min
 * @param {any} max
 * @returns {any}
 */
function generateRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description: Generare un array di 16 nummeri casuali diversi tra loro e compresi tra 1 e max
 * @param {number} max
 * @returns {Array}
 */
function generateArrayBombs (max) {
    while (arrayBombs.length < 16) {
        const randomNumber = generateRandomNumber(1, max);
        if (!arrayBombs.includes(randomNumber)) {
            arrayBombs.push(randomNumber);
        }
    }
    return arrayBombs
}
// console.clear();
// console.log(generateArrayBombs(100));


