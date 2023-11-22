const containerResult = document.querySelector('.result') as HTMLElement;
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.sign');

type num = string | boolean | number;

let n1: num = false;
let n2: num = false;

let operator: string  = '';

numberBtns.forEach((btn: any) :void => {
    btn.addEventListener('click', () :void => {
        if(!n1) {
            n1 = btn.value;
        } else {
            n1 += btn.value;
        }

        containerResult.innerText = `${n1}`;
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
            
            containerResult!.innerText = `${n1}`;
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

    containerResult.innerText = `${result}`;
    n1 = `${result}`;
}


document.querySelector('.finish')?.addEventListener('click', () => operation(+n2, +n1, operator));