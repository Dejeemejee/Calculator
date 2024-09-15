function add (num1, num2) {
        return +num1 + +num2;
}

function subtract (num1, num2) {
    return +num1 - +num2;
}

function multiply (num1, num2) {
   return +num1 * +num2;
}

function divide (num1, num2) {
     return +num1 / +num2;
}

let firstNumber = ' ';
let clickedOperator = ' ';
let secondNumber = null;
let  result = ' ';
let storedNumber = ' ';
let buttonClicked = true;



const number = document.querySelectorAll(".numbers");
const previousPara = document.querySelector(".previous-para");
const currentPara = document.querySelector(".current-para")
const operatorButton = document.querySelectorAll(".operators");
const display = document.querySelector(".calculator");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const backSpaceButton = document.querySelector(".backspace");


previousPara.style.cssText = 'color: white; font-size: larger; font-weight: bold;';
currentPara.style.cssText = 'color: white; font-size: larger; font-weight: bold;';


number.forEach((item) => {
    item.addEventListener("click", (event) => {
       //store the clicked numbers in a variable
             storedNumber += event.target.value; 
             currentPara.innerHTML = storedNumber;
    })
})

operatorButton.forEach((operator) => {
    operator.addEventListener("click", () => {
        console.log(operator)
    //save the first number
        firstNumber = storedNumber;
    //get the operator that was clicked
       operator.value;
       clickedOperator =  operator.value;
       

       storedNumber = ' ';
       previousPara.innerHTML = firstNumber.toString() + " " + clickedOperator.toString();
       console.log(firstNumber);
       //firstNumber.slice(0, -1);
       currentPara.innerHTML = storedNumber;
       console.log(storedNumber);
       
    })

    clearButton.addEventListener("click", function () {
        firstNumber = ' ';
        storedNumber = ' ';
        clickedOperator = ' ';
        previousPara.innerHTML = firstNumber;
        currentPara.innerHTML = storedNumber;
    })

    decimalButton.addEventListener("click", () => {
        addDecimal();
    })
    
})   
equalButton.addEventListener("click", function () {

    operate(clickedOperator);
    previousPara.innerHTML = ' ';
    currentPara.innerHTML = storedNumber;
    firstNumber = undefined;
        
    console.log(firstNumber);
    console.log(storedNumber);
    

})


backSpaceButton.addEventListener("click", () => {
    deleteNumber();
 })


function operate (operator) {
    if(isNaN(firstNumber) || isNaN(storedNumber)) {
        return;
    }
    if(operator == `+`) {
       result = add(firstNumber, storedNumber);
    } else if (operator == `-`) {
        result = subtract(firstNumber, storedNumber);
    } else if (operator == `*`) {
        result = multiply(firstNumber, storedNumber);
    } else if (operator == `/`){
        result = divide(firstNumber, storedNumber);
    } else {
        return;
    } 
    
    storedNumber = roundNumber(result);
    console.log(storedNumber);
}

function roundNumber (num) {
    return Math.round(num * 100000) / 100000;
} 

function addDecimal () {
    if(!storedNumber.includes(".")) {
        storedNumber += "."
        currentPara.innerHTML = storedNumber;
    }
}

function deleteNumber () {
  
}

/*function deleteNumber() {
    if (currentPara.innerHTML.trim() !== '') {
        // If there's a number in the current display, remove its last digit
        storedNumber = storedNumber.slice(0, -1);
        currentPara.innerHTML = storedNumber;
    } else if (previousPara.innerHTML.trim() !== '') {
        // If current display is empty but previous display has content
        let display = previousPara.innerHTML.trim();
        if (display.endsWith(clickedOperator)) {
            // If the last character is an operator, remove it
            clickedOperator = ' ';
            display = display.slice(0, -1).trim();
            storedNumber = display;
            firstNumber = ' ';
        } else {
            // Otherwise, remove the last digit of the first number
            firstNumber = firstNumber.slice(0, -1);
            display = firstNumber + ' ' + clickedOperator;
        }
        previousPara.innerHTML = display;
    }

    // If both displays are empty after deletion, reset all variables
    if (currentPara.innerHTML.trim() === '' && previousPara.innerHTML.trim() === '') {
        firstNumber = ' ';
        storedNumber = ' ';
        clickedOperator = ' ';
    }
}
   if (currentPara.innerHTML !== " ") { 
        storedNumber = storedNumber.slice(0, -1);
        currentPara.innerHTML = storedNumber;
        console.log(storedNumber);
        console.log(firstNumber);
    } else if(previousPara.innerHTML != " " && currentPara.innerHTML == " ") {
        console.log(storedNumber);
        console.log(firstNumber);
        
        
        firstNumber = firstNumber.slice(0, -1)
        previousPara.innerHTML = firstNumber;
    }  */