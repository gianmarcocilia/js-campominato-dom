// ESECUZIONE
const wrapperElem = document.querySelector(".wrapper");
console.log(wrapperElem);

// for (let i = 1; i <= 100; i++) {
//     const numbers = i;
//     console.log(numbers);
//     const cellResult = generateCell(numbers);
//     console.log(cellResult);
//     cellResult.addEventListener("click", myCellClick);
//     wrapperElem.append(cellResult);
// }

// Button start and restart
const play = document.querySelector(".start");
play.addEventListener("click", playGame);
console.log(play);

// Livelli Difficoltà


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

function myCellClick() {
    console.clear()
    console.log(this.textContent);
    this.classList.add("lightblue");
}

function playGame(event) {
    event.preventDefault();
    console.log(this);
    wrapperElem.innerHTML = "";
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

    for (let i = 1; i <= numberInnerCell; i++) {
        const numbers = i;
        console.log(numbers);
        const cellResult = generateCell(numbers, numbersOfCell);
        console.log(cellResult);
        cellResult.addEventListener("click", myCellClick);
        wrapperElem.append(cellResult);
    }
}