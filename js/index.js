"use strict";
const containerResult = document.querySelector('.result');
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');
const finish = document.querySelector('.finish');
let n1 = false;
let n2 = false;
let operator = '';
const showNumber = () => {
    containerResult.innerText = `${n1.toString().replace('.', ',')}`;
};
numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!n1) {
            n1 = btn.value;
        }
        else {
            n1 += btn.value;
        }
        showNumber();
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
            showNumber();
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
    n1 = `${result}`;
    showNumber();
};
finish.addEventListener('click', () => operation(+n2, +n1, operator));
