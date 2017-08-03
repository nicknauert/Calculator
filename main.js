// var snd = new Audio("file.wav"); // buffers automatically when created
// snd.play();

var bSnd = new Audio("./snd/item.m4a");
bSnd.volume = .2;
var otherSnd = new Audio("./snd/coin.m4a");
otherSnd.volume = .2;
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
  bSnd.play();
  arr.push("0");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function oneFunc(){
  bSnd.play();
  arr.push("1");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function twoFunc(){
  bSnd.play();
  arr.push("2");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function threeFunc(){
  bSnd.play();
  arr.push("3");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function fourFunc(){
  bSnd.play();
  arr.push("4");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function fiveFunc(){
  bSnd.play();
  arr.push("5");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function sixFunc(){
  bSnd.play();
  arr.push("6");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function sevenFunc(){
  bSnd.play();
  arr.push("7");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function eightFunc(){
  bSnd.play();
  arr.push("8");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function nineFunc(){
  bSnd.play();
  arr.push("9");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function addFunc(){
  bSnd.play();
  arr.push("+");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function subtractFunc(){
  bSnd.play();
  arr.push("-");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function multiplyFunc(){
  bSnd.play();
  arr.push("*");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function divideFunc(){
  bSnd.play();
  arr.push("/");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function decimalFunc(){
  bSnd.play();
  arr.push(".");
  input = arr.toString().replace(/,/g, "");
  display.innerHTML = input;
}
function clearFunc(){
  otherSnd.play();
  arr = [];
  display.innerHTML = "";
}
function equalsFunc(){
  otherSnd.play();
  input = arr.toString();
  total = eval(input.replace(/,/g, ""));
  clearFunc();
  arr.push(total);
  display.innerHTML = total;
}
