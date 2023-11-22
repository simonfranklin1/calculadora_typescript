// Elements

const resultContainer = document.querySelector('.result') as HTMLElement;
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');
const finish = document.querySelector('.finish') as HTMLButtonElement;
const clearBtn = document.querySelector('.clear') as HTMLButtonElement
const negativeBtn = document.querySelector('.negative') as HTMLButtonElement;
const byHundredBtn = document.querySelector('.percent') as HTMLButtonElement;

type num = string | boolean;

let n1: num = false;
let n2: num = false;

let operator: string  = '';

// Functions

const showNumber = () :void => {
    resultContainer!.innerText = `${n1.toString().replace('.', ',')}`
}

const operation = (number2: number, number1: number, sign: string) => {
    let result: number = 0;
    switch(sign) {
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
}

const resetNumbers = () :void => {
    n1 = false;
    n2 = false;
    operator = '';

    resultContainer.innerText = '0';
    clearBtn.innerText = "AC"
}

const negativeNumber = () :void => {
    if(n1 === false) {
        return;
    } else {
        let number: number;
        number = +n1;
        number *= -1;
        n1 = `${number}`;
        showNumber();
    }  
}

const divideByHundred = () :void => {
    if(!n1) {
        return;
    } else {
        let number: number;
        number = +n1;
        number /= 100;
        n1 = `${number}`;
        showNumber();
    }
}

// Events

numberBtns.forEach((btn: any) :void => {
    btn.addEventListener('click', () :void => {
        if(!n1) {
            n1 = btn.value;
        } else {
            n1 += btn.value;
        }

        showNumber();
        clearBtn.innerText = "C";
    })
})

operatorsBtn.forEach((btn: any) :void => {
    btn.addEventListener('click', () :void => {
        if(!n1) {
            return
        } else {
            document.querySelector('.selected')?.classList.remove('selected');
            btn.classList.add('selected');
            operator = btn.value;
            
            showNumber();
            n2 = n1;
            n1 = false;
        }
    })
})

negativeBtn.addEventListener('click', negativeNumber);

clearBtn.addEventListener('click', resetNumbers);

byHundredBtn.addEventListener('click', divideByHundred)

finish.addEventListener('click', () => operation(+n2, +n1, operator));