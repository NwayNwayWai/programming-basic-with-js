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
