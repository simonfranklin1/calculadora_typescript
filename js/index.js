"use strict";
// Elements
const resultContainer = document.querySelector('.result');
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');
const finish = document.querySelector('.finish');
const clearBtn = document.querySelector('.clear');
const negativeBtn = document.querySelector('.negative');
const byHundredBtn = document.querySelector('.percent');
let n1 = false;
let n2 = false;
let operator = '';
// Functions
const showNumber = () => {
    resultContainer.innerText = `${n1.toString().replace('.', ',')}`;
};
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
const resetNumbers = () => {
    n1 = false;
    n2 = false;
    operator = '';
    resultContainer.innerText = '0';
    clearBtn.innerText = "AC";
};
const negativeNumber = () => {
    if (n1 === false) {
        return;
    }
    else {
        let number;
        number = +n1;
        number *= -1;
        n1 = `${number}`;
        showNumber();
    }
};
const divideByHundred = () => {
    if (!n1) {
        return;
    }
    else {
        let number;
        number = +n1;
        number /= 100;
        n1 = `${number}`;
        showNumber();
    }
};
// Events
numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!n1) {
            n1 = btn.value;
        }
        else {
            n1 += btn.value;
        }
        showNumber();
        clearBtn.innerText = "C";
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
        }
    });
});
negativeBtn.addEventListener('click', negativeNumber);
clearBtn.addEventListener('click', resetNumbers);
byHundredBtn.addEventListener('click', divideByHundred);
finish.addEventListener('click', () => operation(+n2, +n1, operator));
