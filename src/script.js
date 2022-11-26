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
    if(value == 'C'){
        window.fnum = '';
        window.operator = '';
        tempOperator = '';
        window.snum = '';
        window.num = '';
    }else if (value == 'del'){
        window.num = window.num.slice(0,-1);
        if(window.operator == ''){
            window.fnum = window.num;
        }else if(window.num == window.fnum){
            window.operator = '';
        }
    }
    else if(value == '='){
        if (window.fnum != '' && window.operator != '' && window.num != window.fnum + window.operator) {
            tempOperator = operator;
            snum = num.slice(fnum.length+1);
            operator = '';
        }
    }
    else if (value == "+" || value == "-" || value == "*" || value == "/" ) {
        if(window.fnum != ''){
            if(operator != ''){
                snum = num.slice(fnum.length+1);
                tempOperator = operator;
            }
        operator = value;
        }
        if(window.num != window.fnum + window.operator){
            window.num += value;
        }
    }else{
        window.num += value;
        if(window.operator == ''){
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

