let button1 = document.querySelector('.btn1');
let num1 = 0;

button1.addEventListener("click",updatecount1);

function updatecount1(){
    num1++;
    document.querySelector('.number1').innerHTML = num1;
};


let button2 = document.querySelector('.btn2');
let num2 = 0;
button2.addEventListener("click",updatecount2);

function updatecount2(){
    num2++;
    document.querySelector('.number2').innerHTML = num2;
};

let button3 = document.querySelector('.btn3');
let num3 = 0;
button3.addEventListener("click",updatecount3);

function updatecount3(){
    num3++;
    document.querySelector('.number3').innerHTML = num3;
};

let button4 = document.querySelector('.btn4');
let num4 = 0;
button4.addEventListener("click",updatecount4);

function updatecount4(){
    num4++;
    document.querySelector('.number4').innerHTML = num4;
};