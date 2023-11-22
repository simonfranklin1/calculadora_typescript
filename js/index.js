"use strict";
var _a;
const containerResult = document.querySelector('.result');
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');
let n1 = false;
let n2 = false;
let operator = '';
numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!n1) {
            n1 = btn.value;
        }
        else {
            n1 += btn.value;
        }
        containerResult.innerText = `${n1}`;
    });
});
operatorsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        var _a;
        if (!n1) {
            return;
        }
        else {
            (_a = document.querySelector('.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
            btn.classList.add('selected');
            operator = btn.value;
            containerResult.innerText = `${n1}`;
            n2 = n1;
            n1 = false;
            console.log(n1, n2);
        }
    });
});
const operation = (number2, number1, sign) => {
    let result = 0;
    switch (sign) {
        case "+":
            result = number2 + number1;
            break;
        case "-":
            result = number2 - number1;
            break;
        case "*":
            result = number2 * number1;
            break;
        case "/":
            result = number2 / number1;
            break;
    }
    containerResult.innerText = `${result}`;
    n1 = `${result}`;
};
(_a = document.querySelector('.finish')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => operation(+n2, +n1, operator));
