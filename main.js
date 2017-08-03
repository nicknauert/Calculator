let arr = [];


let input = arr.toString();
let total = eval(input.replace(/,/g, ""));

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
const display = document.querySelector("#display>p")

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
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function oneFunc(){
  arr.push("1");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function twoFunc(){
  arr.push("2");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function threeFunc(){
  arr.push("3");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function fourFunc(){
  arr.push("4");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function fiveFunc(){
  arr.push("5");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function sixFunc(){
  arr.push("6");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function sevenFunc(){
  arr.push("7");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function eightFunc(){
  arr.push("8");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function nineFunc(){
  arr.push("9");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function addFunc(){
  arr.push("+");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function subtractFunc(){
  arr.push("-");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function multiplyFunc(){
  arr.push("*");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function divideFunc(){
  arr.push("/");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function decimalFunc(){
  arr.push(".");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function clearFunc(){
  arr = [];
  display.innerHTML = "";
}
function equalsFunc(){
  input = arr.toString();
  total = eval(input.replace(/,/g, ""));
  clearFunc();
  arr.push(total);
  display.innerHTML = total;
}
