const char = ['Clr', 'Del', 'Div', 'Mul', '7', '8', '9', 'Sub', '4', '5', '6', 'Sum', '1','2', '3', 'sm', '0', 'Period', 'Eql',];
const charText = ['AC', '', '/', 'x', '7', '8', '9', '-', '4', '5', '6', '+', '1','2', '3', '', '0', '.', '=',];

const buttonSection = document.getElementById('btns');

for(let i = 0; i < 19; i++) {
    const button = document.createElement('button');
    button.id = `btn${char[i]}`;
    if (/[0-9]/.test(button.id) == true) {
        button.className = `digits`;
    } else {
        button.className = `buttons`;
    }
    button.innerText = `${charText[i]}`;
    buttonSection.appendChild(button);
};

const backspace = document.createElement('i');
backspace.setAttribute('class', 'fas fa-backspace');
btnDel.appendChild(backspace);

const smiley = document.createElement('i');
smiley.setAttribute('class', 'far fa-sun');
btnsm.appendChild(smiley);

const res = document.getElementById('res');
res.innerText = `0`;
  
// const solveProblem = (problem) => {
    
// };
  
// event listener function 
const addEventList = (btn) => {
    btn.addEventListener('click', function () {
        if (res.innerText != '0') {
           return res.innerText = `${res.innerText}${btn.innerText}`;
        } else {
           return res.innerText = `${btn.innerText}`;
        }
    }); 
}

const addEventListSign = (btn) => {
    btn.addEventListener('click', function () {
        if (/(\*|\+|\/|\-)$/.test(res.innerText[res.innerText.length - 1]) == true) {
           return res.innerText[res.innerText.length - 1] = `${btn.innerText}`;
        } else {
           return res.innerText = `${res.innerText}${btn.innerText}`;
        }
    }); 
} 

// event listener for the '0-9' buttons
const digits = document.getElementsByClassName('digits');
for (let digit of digits) {
   addEventList(digit); 
}

// event listener for the 'these' buttons
addEventListSign(btnSum);
addEventListSign(btnSub);
addEventListSign(btnDiv);


btnMul.addEventListener('click', function () {
    if ('*+/-'.includes(res.innerText[res.innerText.length - 1]) == true) {
        return res.innerText[res.innerText.length - 1] = `*`;
    } else {
        return res.innerText = `${res.innerText}*`;
    }
}); 
 
  
// event listener for the 'AC' button
btnClr.addEventListener('click', function () {
    res.innerText = '0';
});

btnPeriod.addEventListener('click', function () {
    return res.innerText = `${res.innerText}${btnPeriod.innerText}`;
});

// event listener for the 'backspace' button
btnDel.addEventListener('click', function() {
    if (res.innerText.length != 1 && res.innerText != '0') {
        res.innerText = res.innerText.substring(0, res.innerText.length - 1);
    } else {
        res.innerText = '0';
    }
    
})
  
// event listener for the 'equal to' button
btnEql.addEventListener('click', function () {
    let problem = res.innerText;
    if (/^0/.test(problem) == true) {
        res.innerText = `0`;
    } else if (/(\+|\*|\/|\-)$/.test(problem[problem.length - 1]) == true){
        problem = problem.substring(0, problem.length -1);
        res.innerText = eval(problem);
    } else {
        res.innerText = eval(problem);
    }
});


  