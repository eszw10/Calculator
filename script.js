let btn = document.querySelectorAll('[cal-num]')
let op = document.getElementById('operation')
let result = document.getElementById('result')
let firstNum = '';
let lastNum = '';
btn.forEach(button => {
    button.addEventListener('click',()=> {
        op.textContent += button.value
    })
})