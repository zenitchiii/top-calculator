function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

let num1;
let num2;
let operator;
let input = "";

function operate(equation, operation) {
    return;
}

function appendDigit(digit) {
    input += digit;
    display.value = input;
}

const display = document.getElementById("display");
const digits = ["0","1","2","3","4","5","6","7","8","9"];

digits.forEach(digit => {
    document.getElementById(digit).addEventListener("click", () => {
        appendDigit(digit);
    });
});

document.getElementById("clear").addEventListener("click", () => {
    input = "";
    display.value = "";
})