let num1;
let num2;
let operand;
let displayText = "";

const currentInput = document.querySelector('#currentInput');
const display = document.querySelector('#display');
const history = document.querySelector('#history');
const numbers = document.querySelector('#numbers');
const operators = document.querySelector('#operators');

const numBtn = document.querySelector('.numBtn');
numbers.addEventListener('click',(e)=>{
    if(e.target.classList.contains('numBtn')){
        displayText+=e.target.id;
        currentInput.textContent = displayText;
    }
});

const operator = document.querySelector('.operator');
operators.addEventListener('click', (e)=>{
    if(e.target.classList.contains('operator')){
        if(num1!=undefined){
            num2=displayText;
            console.log(operand, num1, num2);
            num1 = operate(operand,num1,num2);
            num2 = "";
            displayText = "";
            return;
        }
        num1=displayText;
        operand = e.target.id;
        displayText="";
    }
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
    displayText = "";
    currentInput.textContent = displayText;
})


function add(num1, num2){return num1+num2;}

function subtract(num1, num2){return num1-num2;}

function multiply(num1, num2){return num1*num2;}

function divide(num1, num2){return num1/num2;}

function operate(operand, num1, num2){
    switch(operand){
        case "+":
            currentInput.textContent = add(num1,num2);
            break;
        case "-":
            currentInput.textContent = subtract(num1,num2);
            break;
        case "*":
            currentInput.textContent = multiply(num1,num2);
            break;
        default:
            currentInput.textContent = divide(num1,num2);
    }
}