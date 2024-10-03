let x = document.getElementById('results')
let y = x.innerText
let input = ''

function btn(number){
    x.innerText = x.innerText + number
}

function btnOperators(operator){
    x.innerText = x.innerText + number
   input += ' ' + operator + ' ';
}




function btnSqr(num){
    x.innerText = x.innerText + `${num}²`
}

function btnSqrRt(){
    x.innerText = x.innerText + `√${num}`
}

function btnSgn(){

}

function btnBack(){
    //string length remove last index?
    z = y.length
    for(i=0; i<z; i++){
        y = ''
        y = y[i]
    }
}

function btnClr(){
    x.innerText = x.innerText + '0'
}

function btnClrRslt(){
    //search for index of =, remove everything after?
}