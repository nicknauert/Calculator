let arr = [];


input = arr.toString();
total = eval(input.replace(/,/g, ""));

const buttons = document.querySelectorAll("button");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const equals = document.querySelector("#equals");
const multiply = document.querySelector("#multiply");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const decimal = document.querySelector("#decimal");
const clear = document.querySelector("#clear");


zero.addEventListener("click", zeroFunc);
one.addEventListener("click", oneFunc);
two.addEventListener("click", twoFunc);
three.addEventListener("click", threeFunc);
four.addEventListener("click", fourFunc);
five.addEventListener("click", fiveFunc);
six.addEventListener("click", sixFunc);
seven.addEventListener("click", sevenFunc);
eight.addEventListener("click", eightFunc);
nine.addEventListener("click", nineFunc);
equals.addEventListener("click", equalsFunc);
add.addEventListener("click", addFunc);
subtract.addEventListener("click", subtractFunc);
divide.addEventListener("click", divideFunc);
multiply.addEventListener("click", multiplyFunc);
clear.addEventListener("click", clearFunc);
decimal.addEventListener("click", decimalFunc);


function zeroFunc(){
  arr.push("0");
  console.log(arr);
}
function oneFunc(){
  arr.push("1");
  console.log(arr);
}
function twoFunc(){
  arr.push("2");
  console.log(arr);
}
function threeFunc(){
  arr.push("3");
  console.log(arr);
}
function fourFunc(){
  arr.push("4");
  console.log(arr);
}
function fiveFunc(){
  arr.push("5");
  console.log(arr);
}
function sixFunc(){
  arr.push("6");
  console.log(arr);
}
function sevenFunc(){
  arr.push("7");
  console.log(arr);
}
function eightFunc(){
  arr.push("8");
  console.log(arr);
}
function nineFunc(){
  arr.push("9");
  console.log(arr);
}
function addFunc(){
  arr.push("+");
  console.log(arr);
}
function subtractFunc(){
  arr.push("-");
  console.log(arr);
}
function multiplyFunc(){
  arr.push("*");
  console.log(arr);
}
function divideFunc(){
  arr.push("/");
  console.log(arr);
}

function clearFunc(){
  arr = [];
}

function equalsFunc(){
  input = arr.toString();
  total = eval(input.replace(/,/g, ""));
  console.log(total);
}
