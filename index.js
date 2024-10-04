let x = document.getElementById('results');
let y = document.getElementById('calculation');
let maxLength = 18;

function btn(number){
    if(x.innerText.length < maxLength){
        if(x.innerText == '0'){
            x.innerText = number
        }
        else{
            x.innerText += number
        }
    }
}

function btnOperators(operator){
    if(x.innerText.length < maxLength){
        x.innerText += operator;
    }
}

function btnSqr(){
    if(x.innerText.length + 3 <= maxLength){
        x.innerText += '**2';
    }
}
}

function btnSqrRt(){
    if(x.innerText.length + 11 <= maxLength){
        x.innerText =  `Math.sqrt(${x.innerText})`; 
    }
}

function btnEql(){;
    var expression = x.innerText;
    y.innerText = expression;
    x.innerText = eval(expression);
}

function btnBck(){
    x.innerText = x.innerText.slice(0, -1) || '0';
}

function btnClr(){
    x.innerText = '0';
    y.innerText = '';
}

function btnPrcnt(){
    if(x.innerHTML.length + 4 <= maxLength){
        x.innerText += '*0.01'
    }
}

function btnClrRslt(){
    x.innerText = y.innerText;
    y.innerText = '';
}

function btnClrEnt(){
    x.innerText = '0';
}