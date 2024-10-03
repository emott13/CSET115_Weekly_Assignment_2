let x = document.getElementById('results')
let y = x.innerText
let input = ''

function btn(number){
    if(x.innerText == '0'){
        x.innerText = number
    }
    else{
        x.innerText = x.innerText + number
    }
}

function btnOperators(operator){
    x.innerText = x.innerText + ' ' + operator + ' ';
}

function btnSqr(){
    x.innerText = `${x.innerText}²`
}

function btnSqrRt(){
    x.innerText =  `√${x.innerText}`
}

function btnEqual(){
    eq = x.innerText
    v = `${eq}`
    x.innerText = v
    // return v
}


function btnBck(){
    //string length remove last index?
    z = y.length
    for(i=0; i<z; i++){
        y = ''
        y = y[i]
    }
}

function btnClr(){
    x.innerText = '0'
}

function btnClrRslt(){
    //search for index of =, remove everything after?
}