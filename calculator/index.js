let calculatorDisplay = document.querySelector('.display');
let operations = ["+", "-", "*", "/"];
let specialOps = ['c', '=', 'ac', 'on/off', '+/-'];

let numbers = [0,1,2,3,4,5,6,7,8,9];

let buttonAuxiliar = ['on/off', 'c', 'ac', '*', 7,8,9,'+',4,5,6,'-',1,2,3,'/',"+/-",0,'.','=']; // only to make the calculator display

let firstNumber = '';
let secondNumber = '';
let currentNumber = '';
let firstNegative = false;
let secondNegative = false;

let currentOperation; 
let result;

let started = false;

let calculate = {
    "+": (x,y)=>x+y,
    "-": (x,y)=>x-y,
    "*": (x,y)=>x*y,
    "/": (x,y)=>x/y,
}
let special = {
    "c": ()=>{
        calculatorDisplay.innerHTML = '';
    },
    "=": ()=>{
        firstNumberInt = parseFloat(firstNumber);
        secondNumberInt = parseFloat(currentNumber);

        firstNumberInt *= (firstNegative) ? -1 : 1;
        secondNumberInt *= (secondNegative) ? -1 : 1; 

        result = calculate[currentOperation](firstNumberInt, secondNumberInt);

        firstNumber = secondNumber;
        currentNumber = result;
        (result.toString().length < 9) 
            ? calculatorDisplay.innerHTML = result 
            : calculatorDisplay.innerHTML = (result / (10 ** result.toString().length)).toFixed(4) + 'e' + result.toString().length
    },
    "ac": ()=>{
        firstNumber = '';
        secondNumber ='';
        currentOperation = undefined;

        calculatorDisplay.innerHTML = '';
    },
    "+/-": ()=>{
        firstNegative = (currentNumber === firstNumber);
        secondNegative = (currentNumber === secondNumber);
        calculatorDisplay.innerHTML = currentNumber *-1;        
    }
}


function display(e){
    let key = e.innerHTML;
    
    for(let i in specialOps){
        if(specialOps[i] === key){
            special[specialOps[i]]();
            return
        }
    }

    for(let i in operations){
        if(operations[i] === key && firstNumber !== ''){ 
            currentOperation = operations[i];
            key ='';
        };
    }
    
    if(currentOperation){
        if(secondNumber.length <8) {
            secondNumber += key;
            currentNumber = secondNumber;
            calculatorDisplay.innerHTML = secondNumber;
        }
    } else{
        if(firstNumber.length < 8){
            firstNumber += key;

            currentNumber = firstNumber;
            calculatorDisplay.innerHTML = firstNumber;  
              
        }  
    } 

}

buttonAuxiliar.forEach((item)=>{
    let button = document.createElement('div');
    button.innerHTML = item;
    button.classList.add('button');
    button.addEventListener('click', ()=>{
        (started) ? display(button) : false
    });
    document.querySelector('.buttons').appendChild(button);

})

let startButton = document.querySelectorAll('.button')[0];

startButton.addEventListener('click', ()=>{
    started = (!started);
    if(started) {
        document.querySelector('.sign').style.backgroundColor = 'red';

    } else{
        document.querySelector('.sign').style.backgroundColor = '#500';
        special["ac"]();
    }
})