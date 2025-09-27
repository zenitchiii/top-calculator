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

let num1 = null;
let num2 = null;
let operator = null;
let input = "";
let justEvaluated = false;

function operate(num1, num2, operation) {
    if (operation === "+") {
        return add(num1, num2);
    } else if (operation === "-") {
        return subtract(num1, num2);
    } else if (operation === "*") {
        return multiply(num1, num2);
    } else if (operation === "/") {
        if (num2 === 0) {
            return "Error";
        } else {
            return divide(num1, num2);
        }
    } else {
        return num1;
    }
}

function appendDigit(digit) {
    if (justEvaluated) {
        input = "";
        justEvaluated = false;
    }
    input += digit;
    display.value = input;
}

function setOp(operation){
    if (input === "" && num1 === null) return;

    if (num1 !== null && operator !== null && input !== "") {
        num2 = parseFloat(input);
        let result = operate(num1, num2, operator);
        display.value = result;
        num1 = result;
        input = "";
    } else if (input !== "") {
        num1 = parseFloat(input);
        input = "";
    }

    operator = operation;
    justEvaluated = false;
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
    num1 = null;
    num2 = null;
    operator = null;
    justEvaluated = false;
    display.value = "";
});

document.getElementById("add").addEventListener("click", () => setOp("+"));
document.getElementById("subtract").addEventListener("click", () => setOp("-"));
document.getElementById("multiply").addEventListener("click", () => setOp("*"));
document.getElementById("divide").addEventListener("click", () => setOp("/"));

document.getElementById("equals").addEventListener("click", () => {
    if (num1 === null || operator === null || input === "") return;

    num2 = parseFloat(input);
    let result = operate(num1, num2, operator);
    display.value = result;

    input = result.toString();
    num1 = result;
    num2 = null;
    operator = null;

    justEvaluated = true;
});
