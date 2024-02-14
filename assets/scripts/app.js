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

function writeToLog(
    operationIdentifier, 
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry= {
        operation: operationIdentifier,
         prevResult: prevResult,
        Number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber =  getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide);