const containerResult = document.querySelector('.result') as HTMLElement;
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');
const finish = document.querySelector('.finish') as HTMLButtonElement;

type num = string | boolean | number;

let n1: num = false;
let n2: num = false;

let operator: string  = '';

const showNumber = () :void => {
    containerResult!.innerText = `${n1.toString().replace('.', ',')}`
}

numberBtns.forEach((btn: any) :void => {
    btn.addEventListener('click', () :void => {
        if(!n1) {
            n1 = btn.value;
        } else {
            n1 += btn.value;
        }

        showNumber()
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
            console.log(n1, n2)
        }
    })
})

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

finish.addEventListener('click', () => operation(+n2, +n1, operator));