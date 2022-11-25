function sum(a, b) {
  return a + b;
}

function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}

var fnum = '';
var snum = '';
var operator= '';
var num = '';

function onBtnPress(value){
    let tempOperator = '';
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        if(window.fnum != ''){
            if(operator != ''){
                snum = num.slice(fnum.length+1);
                tempOperator = operator;
            }
        operator = value;
        }
        window.num += value;
    }else{
        window.num += value;
        if(operator == ''){
            window.fnum += value;
        }
    }
    if(fnum != '' && snum != '' && tempOperator != ''){
        switch (tempOperator) {
            case '+':
                num = String(sum(parseInt(fnum), parseInt(snum)));
                break;
            case '-':
                num = String(sub(parseInt(fnum), parseInt(snum)));
                break;
            case '*':
                num = String(mul(parseInt(fnum), parseInt(snum)));
                break;
            case '/':
                num = String(div(parseInt(fnum), parseInt(snum)));
                break;
        }
        window.fnum = num;
        num += operator;
        window.snum = '';
    }
    document.querySelector(".display").innerHTML = num;
}

