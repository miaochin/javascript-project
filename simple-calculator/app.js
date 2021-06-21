const result = document.querySelector('.result');
const ac = document.getElementById('ac');
const numberDot = document.querySelectorAll('.number-dot');
const operator = document.querySelectorAll('.fas');
const operatorDict = { "fa-divide": '/', "fa-times": '*', "fa-minus": '-', 'fa-plus': '+', 'fa-equals': '=' };

let countResult = 0;
let previousNum = [];
let dot = false;
let prepareToNew = false;

ac.addEventListener('click', () => {
    countResult = 0;
    result.innerText = 0;
    dot = false;
    prepareToNew = false;
    previousNum = [];
})

for (let i = 0; i < numberDot.length; i++) {
    numberDot[i].addEventListener('click', () => { 
        if (prepareToNew == true) {
            countResult = 0;
            dot = false;
            prepareToNew = false;
        }
        if (numberDot[i].innerText != '.' || dot == false) {
            countResult += numberDot[i].innerText;  
        }
        if (countResult[0] == '0' && countResult[1] != '.') {
            countResult = countResult.slice(1, countResult.length)
        }
        if (numberDot[i].innerText == '.') {
            dot = true;
        }
        result.innerText = countResult;    
    })
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        if (prepareToNew == false) {
            previousNum.push(countResult);
            prepareToNew = true;
            previousNum.push(operatorDict[operator[i].classList[1]]);
        }
        else {
            previousNum.pop();
            previousNum.push(operatorDict[operator[i].classList[1]]);
        }
        if (previousNum[previousNum.length-2] == '0' && previousNum[previousNum.length-3] == '/') {
            ac.click();
            result.innerText = "Error";
        }
        else if (operatorDict[operator[i].classList[1]] == '=' ) {
            previousNum.pop(); 
            let calculate = previousNum.join('');
            ac.click();
            countResult = eval(calculate); 
            result.innerText = countResult;    
            if (countResult % 1 != 0) dot = true;  
        }
    })
}



