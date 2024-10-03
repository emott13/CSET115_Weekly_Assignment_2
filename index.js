let x = document.getElementById('results')
let y = x.innerText

function btn1(){
    x.innerText = x.innerText + '1'
}

function btn2(){
    x.innerText = x.innerText + '2'
}

function btn3(){
    x.innerText = x.innerText + '3'
}

function btn4(){
    x.innerText = x.innerText + '4'
}

function btn5(){
    x.innerText = x.innerText + '5'
}

function btn6(){
    x.innerText = x.innerText + '6'
}

function btn7(){
    x.innerText = x.innerText + '7'
}

function btn8(){
    x.innerText = x.innerText + '8'
}

function btn9(){
    x.innerText = x.innerText + '9'
}

function btnDec(){
    x.innerText = x.innerText + '.'
}

function btnAdd(){
    x.innerText = x.innerText + '+'
}

function btnSub(){
    x.innerText = x.innerText + '-'
}

function btnMult(){
    x.innerText = x.innerText + '*'
}

function btnDivi(){
    x.innerText = x.innerText + '/'
}

function btnEql(){
    x.innerText = x.innerText + '='
}

function btnPerc(){
    x.innerText = x.innerText + '%'
}

function btnSqr(num){
    x.innerText = x.innerText + `${num}^2`
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