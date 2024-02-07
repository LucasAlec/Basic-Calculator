const defaultResult = 0;
let currentResult = defaultResult;
let logEntries=[];

// Gets input from input field
function getUserInput(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file
}


function add() {
    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries[0]);
}

function subtract() {
    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide);