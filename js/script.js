// Variabili globali per il gioco
let arrayBombs = [];
let maxClicks = "";

// ESECUZIONE
function playGame(event) {
    event.preventDefault();
    console.log(this);
    // Impedimento di più creazioni di wrapper 
    wrapperElem.innerHTML = "";
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
        const cellResult = generateCell(numbers, numbersOfCell);
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
    console.log(this.textContent);
    this.classList.add("lightblue");
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