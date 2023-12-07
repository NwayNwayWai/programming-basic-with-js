// String

let greet = "hello world";
console.log(greet);

let myName = "Nway Nway Wai";
console.log(myName);

let myAge = "my age is 20";
console.log(myAge);

let sayhi = `Hi there ${myName}`;
console.log(sayhi);

let time = "3 o'clock";
console.log(time);

let myHeight = `5"8'`;
console.log(myHeight);

// Number

let myNum = 10;
let myAnotherNum = 20;
let myfloat = 20.35;
console.log(myNum + myAnotherNum);
console.log(myfloat + myNum);

// Boolean

let myVar = true;
console.log(myVar);

let myNameB = "Nway Nway Wai";
console.log(Boolean(myNameB));

// false values

// 1 0
// 2 ""
// 3 null
// 4 undefined
// 5 NaN
// 6 false

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean("nway"));

let myVarB = Boolean("nway nway");
let mystring = "false";
console.log(myVarB);
console.log(mystring);

let myAgeB = 0;
console.log(Boolean(myAgeB));

let minNum = -1;
console.log(Boolean(minNum));

// undefined

let x; //undefined
console.log(x);
console.log(Boolean(x));

// null

let y = null;
console.log(y);
console.log(Boolean(y));

// Not A Number(NaN)

let num1; // undefined
let num2 = 1;
console.log(num1 + num2);
console.log(Boolean(num1 + num2));

// expression

1 + 2; //3
"a" + "b"; //"ab"
5 - 1; //4

//statement

let sum = 1 + 2; //statement => underfied

//operator

// 1 arithmetic(+,-)
// 2 assignment
// 3 comparison
// 4 logical

let z = "q" + "v";
console.log(z);

let t = 2 + "s"; //string+num=string
console.log(t);

let o = 5 - 2;
console.log(o);

let a = "5" - "2"; //string-string=number/NaN
console.log(a);

let r = "5" - 2; //string-number=number/NaN
console.log(r);

let w = "sdf" - 2; //string-number=number/NaN
console.log(w);

// * (multi)

let h = 2 * "adf";
console.log(h);

let s = "2" * "8";
console.log(h);

// / (devi)

let i = 4 % 2;
console.log(i);

let c = 4 / 2;
console.log(c);

let b = 1;
console.log(b);

// assignment (=)

let j,
  k,
  l = 1;
console.log(j);
console.log(k);
console.log(l);

//power
console.log(2 ** 3); //2*2*2 =>8

let f = 3;
f = f + 3;
f += 3;
f = f - 1;
f -= 2;
console.log(f);

let bread = 5;
bread += 2;
bread -= 3;
console.log(bread);

let m = 5;

m *= 6;
m /= 2;
m %= 3;
console.log(m);

// operator precedence

let u = 10 + 6 - (2 * 4) / 5;
console.log(u);

//comparison operator(>,<,>=,<=,==,===,!=,!==)

// logical operator

//1 Not (!)
console.log(!true);

//2 And (&&)
let num = 1;
console.log(num > 0 && num == 1); //true && true=true
console.log(num > 4 && num == 1); //false && true=false

//3 Or(||)
let numo = 1;
console.log(numo > 0 || numo == 1); //true && true=true
console.log(numo > 4 || numo == 1); //false && true=true

//function

function shopping() {
  console.log("go to shop");
  console.log("buy a product");
  console.log("go back home");
}
shopping();

function shopping(product) {
  //let product="pen"
  console.log("go to shop");
  console.log("buy a " + product); // buy a pen
  console.log("go back home");
}

shopping("pen");

function add(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}
console.log(add(2, 5));

let result = add(2, 5);
console.log(result + 6);

function sayName() {
  console.log("Nway Nway Wai");
}
sayName();

function sayName(name) {
  console.log(name);
}
sayName("nway nway wai");

function sayName(name, age) {
  console.log(name, age);
  return "h1";
}
let test = sayName("nway nway wai", 24);
console.log(test);

function sayName(name) {
  return "hi";
}
let test1 = sayName("nnw");
console.log(test1);

function calculateage(birthyear) {
  let age = 2021 - birthyear;
  console.log(age);
}
calculateage(2000);

//default parameter
// let a=2
// let b;
function add(a, b = 0) {
  console.log(a + b);
}
add(3, 7);

//Rest Parameter

function rest(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
rest(1, 2, 3, 4, 5);

//function staatement

function myName() {
  console.log("Nway Nway Wai");
}
myName();

//function expression

let sayHi = function () {
  console.log("hi there");
};
sayHi();

let sayHi1 = function (word) {
  console.log(word);
};
sayHi("Hello");

//Callback function

function sayMyName() {
  console.log("Nway Nway Wai");
}
sayMyName();

function sayMyName(name, fun) {
  // console.log(name,fun);
  fun("Nway");
}
sayMyName("Nway Nway Wai", function (name) {
  console.log(name);
});

function sayMyName(name, fun) {
  let result = fun(name);
  console.log(result);
}
sayMyName("aung aung", function (name) {
  return name;
});

//callback function

function twice(num) {
  let result = num * 2;
  console.log(result);
}
twice(4);

function twice(num, modifier) {
  let result = modifier(num) * 2;
  console.log(result);
}
twice(4, function (num) {
  return num + 6;
});
