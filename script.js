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

function setOp(operation){
    if (input === "") return;
    num1 = parseFloat(input);
    operator = operation;
    input = "";
}

let num1;
let num2;
let operator;
let input = "";

function operate(num1, num2, operation) {
    if (operation === "+") {
        return add(num1, num2);
    } else if (operation === "-") {
        return subtract(num1, num2);
    } else if (operation === "*") {
        return multiply(num1, num2);
    } else if (operation === "/") {
        if (num2 === 0) {
            return "Error"
        } else {
            return divide(num1, num2);
        }
    } else {
        return num2;
    }
}

function appendDigit(digit) {
    input += digit;
    display.value = input;
}

const display = document.getElementById("display");
const digits = [0,1,2,3,4,5,6,7,8,9];

digits.forEach(digit => {
    document.getElementById(digit.toString()).addEventListener("click", () => {
        appendDigit(digit);
    });
});

document.getElementById("clear").addEventListener("click", () => {
    input = "";
    display.value = "";
})

document.getElementById("add").addEventListener("click", () => setOp("+"));
document.getElementById("subtract").addEventListener("click", () => setOp("-"));
document.getElementById("multiply").addEventListener("click", () => setOp("*"));
document.getElementById("divide").addEventListener("click", () => setOp("/"));

document.getElementById("equals").addEventListener("click", () => {
    if (num1 === null || operator === null) return;

    num2 = parseFloat(input);
    let result = operate(num1,num2,operator);
    display.value = result;
});