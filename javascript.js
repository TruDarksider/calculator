function add(num1, num2){return num1+num2;}

function subtract(num1, num2){return num1-num2;}

function multiply(num1, num2){return num1*num2;}

function divide(num1, num2){return num1/num2;}

function operate(operand, num1, num2){
    switch(operand){
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        default:
            divide(num1,num2);
    }
}