let btn = document.querySelectorAll('[cal-num]')
let opBtn = document.querySelectorAll('[cal-op]')
let op = document.getElementById('operation')
let result = document.getElementById('result')
let firstNum = '';
let lastNum = '';
let currentOperator = null;
let reset = false;
let del = document.getElementById('delete');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal')

//screen reset
function screenReset() {
    result.textContent = '';
    reset = false;
}

//add number function
btn.forEach(button => {
    addNum(button)
})

function addNum(num) {
    num.addEventListener('click',()=> {
        if(result.textContent == '0' || reset) {
            screenReset();
        }
        result.textContent += num.value
    })
}

//add operator function
opBtn.forEach(button=> {
    addOperator(button);
})

function addOperator(operator) {
    operator.addEventListener('click', ()=> {
        if(currentOperator !== null) {
            evaluate();
        }
        firstNum = result.textContent;
        currentOperator = operator.value;
        op.textContent = `${firstNum} ${currentOperator}`
        reset = true;
    })
}

//delete function
del.addEventListener('click', ()=> {
    result.textContent = result.textContent.slice(0,-1)
})

//clear function
clear.addEventListener('click', ()=> {
    result.textContent = '0'
    op.textContent = '';
    firstNum = '';
    lastNum = '';
    currentOperator = null;
})

//evaluate function
equal.addEventListener('click', evaluate)
function evaluate() {
    if(currentOperator === null || reset) return
    lastNum = result.textContent;
    let theResult = operate(currentOperator, firstNum, lastNum);
    if(theResult % 1 == 0) {
        result.textContent = theResult;
    } else {
        result.textContent = theResult.toFixed(2);
    }
    op.textContent = `${firstNum} ${currentOperator} ${lastNum} =`
    currentOperator = null
}

//operator function
function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        case '%':
            return modulo(a,b);
        default:
            return;
    }
}

function add(a,b) {
    return a + b
}

function substract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function modulo(a,b) {
    return a % b
}

