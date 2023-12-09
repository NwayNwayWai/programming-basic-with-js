// // String

// let greet = "hello world";
// console.log(greet);

// let myName = "Nway Nway Wai";
// console.log(myName);

// let myAge = "my age is 20";
// console.log(myAge);

// let sayhi = `Hi there ${myName}`;
// console.log(sayhi);

// let time = "3 o'clock";
// console.log(time);

// let myHeight = `5"8'`;
// console.log(myHeight);

// // Number

// let myNum = 10;
// let myAnotherNum = 20;
// let myfloat = 20.35;
// console.log(myNum + myAnotherNum);
// console.log(myfloat + myNum);

// // Boolean

// let myVar = true;
// console.log(myVar);

// let myNameB = "Nway Nway Wai";
// console.log(Boolean(myNameB));

// // false values

// // 1 0
// // 2 ""
// // 3 null
// // 4 undefined
// // 5 NaN
// // 6 false

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean("nway"));

// let myVarB = Boolean("nway nway");
// let mystring = "false";
// console.log(myVarB);
// console.log(mystring);

// let myAgeB = 0;
// console.log(Boolean(myAgeB));

// let minNum = -1;
// console.log(Boolean(minNum));

// // undefined

// let x; //undefined
// console.log(x);
// console.log(Boolean(x));

// // null

// let y = null;
// console.log(y);
// console.log(Boolean(y));

// // Not A Number(NaN)

// let num1; // undefined
// let num2 = 1;
// console.log(num1 + num2);
// console.log(Boolean(num1 + num2));

// // expression

// 1 + 2; //3
// "a" + "b"; //"ab"
// 5 - 1; //4

// //statement

// let sum = 1 + 2; //statement => underfied

// //operator

// // 1 arithmetic(+,-)
// // 2 assignment
// // 3 comparison
// // 4 logical

// let z = "q" + "v";
// console.log(z);

// let t = 2 + "s"; //string+num=string
// console.log(t);

// let o = 5 - 2;
// console.log(o);

// let a = "5" - "2"; //string-string=number/NaN
// console.log(a);

// let r = "5" - 2; //string-number=number/NaN
// console.log(r);

// let w = "sdf" - 2; //string-number=number/NaN
// console.log(w);

// // * (multi)

// let h = 2 * "adf";
// console.log(h);

// let s = "2" * "8";
// console.log(h);

// // / (devi)

// let i = 4 % 2;
// console.log(i);

// let c = 4 / 2;
// console.log(c);

// let b = 1;
// console.log(b);

// // assignment (=)

// let j,
//   k,
//   l = 1;
// console.log(j);
// console.log(k);
// console.log(l);

// //power
// console.log(2 ** 3); //2*2*2 =>8

// let f = 3;
// f = f + 3;
// f += 3;
// f = f - 1;
// f -= 2;
// console.log(f);

// let bread = 5;
// bread += 2;
// bread -= 3;
// console.log(bread);

// let m = 5;

// m *= 6;
// m /= 2;
// m %= 3;
// console.log(m);

// // operator precedence

// let u = 10 + 6 - (2 * 4) / 5;
// console.log(u);

// //comparison operator(>,<,>=,<=,==,===,!=,!==)

// // logical operator

// //1 Not (!)
// console.log(!true);

// //2 And (&&)
// let num = 1;
// console.log(num > 0 && num == 1); //true && true=true
// console.log(num > 4 && num == 1); //false && true=false

// //3 Or(||)
// let numo = 1;
// console.log(numo > 0 || numo == 1); //true && true=true
// console.log(numo > 4 || numo == 1); //false && true=true

// //function

// function shopping() {
//   console.log("go to shop");
//   console.log("buy a product");
//   console.log("go back home");
// }
// shopping();

// function shopping(product) {
//   //let product="pen"
//   console.log("go to shop");
//   console.log("buy a " + product); // buy a pen
//   console.log("go back home");
// }

// shopping("pen");

// function add(num1, num2) {
//   //console.log(num1 + num2);
//   return num1 + num2;
// }
// console.log(add(2, 5));

// let result = add(2, 5);
// console.log(result + 6);

// function sayName() {
//   console.log("Nway Nway Wai");
// }
// sayName();

// function sayName(name) {
//   console.log(name);
// }
// sayName("nway nway wai");

// function sayName(name, age) {
//   console.log(name, age);
//   return "h1";
// }
// let test = sayName("nway nway wai", 24);
// console.log(test);

// function sayName(name) {
//   return "hi";
// }
// let test1 = sayName("nnw");
// console.log(test1);

// function calculateage(birthyear) {
//   let age = 2021 - birthyear;
//   console.log(age);
// }
// calculateage(2000);

// //default parameter
// // let a=2
// // let b;
// function add(a, b = 0) {
//   console.log(a + b);
// }
// add(3, 7);

// //Rest Parameter

// function rest(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// rest(1, 2, 3, 4, 5);

// //function staatement

// function myName() {
//   console.log("Nway Nway Wai");
// }
// myName();

// //function expression

// let sayHi = function () {
//   console.log("hi there");
// };
// sayHi();

// let sayHi1 = function (word) {
//   console.log(word);
// };
// sayHi("Hello");

// //Callback function

// function sayMyName() {
//   console.log("Nway Nway Wai");
// }
// sayMyName();

// function sayMyName(name, fun) {
//   // console.log(name,fun);
//   fun("Nway");
// }
// sayMyName("Nway Nway Wai", function (name) {
//   console.log(name);
// });

// function sayMyName(name, fun) {
//   let result = fun(name);
//   console.log(result);
// }
// sayMyName("aung aung", function (name) {
//   return name;
// });

// //callback function

// function twice(num) {
//   let result = num * 2;
//   console.log(result);
// }
// twice(4);

// function twice(num, modifier) {
//   let result = modifier(num) * 2;
//   console.log(result);
// }
// twice(4, function (num) {
//   return num + 6;
// });

//Arrow Function

// let sayHi = () => console.log("hi");
// sayHi();

// let sayHi = () => "hello";
// console.log(sayHi());

// let sayHi = (word) => word;
// console.log(sayHi("hello"));

// let twice = (num) => num * 2;
// console.log(twice(5));

//Array

//let mixture = new Array("dog", 20, 1.3, true);

// let mixture = ["dog", 20, 1.3, true];
// console.log(mixture[0]);
// console.log(mixture.length);

// mixture[4] = "Nway Nway Wai";
// mixture[3] = "false";

// console.log(mixture);

// let frutis = ["apple", "orange"];

// frutis[2] = "mango";
// console.log(frutis[frutis.length - 1]);

//Nested Array

// let arr = [
//   ["a", "b", "c"],
//   [1, 2, 3],
// ];
// console.log(arr[0]);

//spead operador

// let data1 = [1, 2, 3];
// let data2 = [4, 5, 6];

// let result = [...data1, ...data2];
// console.log(result);

// function add(a, b) {
//   console.log(a + b);
// }
// let num = [1, 2];
// add(...num);

//destruction

// let data = ["mgmg", 20, "ttu"];

// let name=data[0];
// let age=data[1];
// let school=data[2];

// let [name, age, school] = data;

// console.log(name, age, school);

// function add([a, b]) {
//   console.log(a + b);
// }
// add([1, 2]);

//Array Methods

// let animals = ["cats", "dog", "monkey"];

// animals[3] = "bird";
// animals.push("lion"); //end of array
// animals.pop(); //remove end of array
// animals.shift(); //remove start of array
// animals.unshift("tiger");// add start of array
// let index = animals.indexOf("dog");
// let string = animals.join();
// animals.splice(0, 1);
// console.log(animals);

//map method

// let num = [1, 2, 3, 4, 5];

// let newArr = num.map((num) => {
//   return num + 100;
// });
//console.log(newArr);

// num = num.map((num) => {
//   return num + 100;
// });
// console.log(num);

// let names = ["John", "chris", "mgmg"];
// names = names.map((names) => {
//   return "Mrs." + names;
// });
// console.log(names);

//filter method

// let nums = [1, 2, 3, 4, 5, 6];

// nums = nums.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(nums);

//reduce method

// let nums = [1, 2, 3, 4, 5, 6];

// nums = nums.reduce((prev, current) => {
//    return prev + current;
//   return prev * current;
// });
// console.log(nums);

//Everything is a object

// let str = "hello";
// console.log(typeof str);

// let str = new String("hello");
// console.log(str[4]);

// str = str.toUpperCase();
// str = str.toLowerCase();
// str = str.trim();

// let str = "hello, world again";

// str = str.split(",");

// console.log(str);
// let num=new Number(12);
// let num = 12.6;

// num = num.toFixed();
// console.log(num);
// console.log(typeof num);

// let bool = new Boolean(true);

// bool = bool.toString();
// console.log(typeof bool);

//object

// let person = {
//   name: "john",
//   age: 24,
//   eat() {
//     console.log("person is eating");
//   },
// };
// //dot notation
// console.log(person.name);

// //bracket notation
// let propName = "age";
// console.log(person[propName]);

//overwrite

// person.name = "nway";

// person.haiecolor = "black";
// console.log(person);

// person.eat();

// person.drink = function () {
//   console.log("person is drinking");
// };
// console.log(person);

// console.log(window);

// setTimeout(() => {
//   console.log("i am callBack");
// }, 3000);

// this

//mothod==> method's object
//regular fun==> window
//arrow fun==>parent's this(lexical scoping)

// let person = {
//   name: "john",
//   age: 24,
//   eat() {
//     console.log(this.name + " is eating");
//   },
// };
// person.eat();

// function test(){
//   console.log(this); //window
// }
// test();

// let person = {
//   name: "john",
//   age: 24,
//   eat() {
//     setTimeout(function () {
//       console.log(this); //window
//     }, 3000);
//   },
// };
// person.eat();

// let person = {
//   name: "john",
//   age: 24,
//   eat: () => {
//     setTimeout(() => {
//       console.log(this);
//     }, 3000);
//   },
// };

// person.eat();
//object spread

// let obj1 = {
//   myName: "nway",
//   age: 24,
// };
// let obj2 = {
//   myhairColor: "black",
// };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//object destructring

// let { name, age } = {
//   name: "nway",
//   age: 20,
// };
// console.log(name);
// console.log(age);

//property shorthand

// let name = "nway";
// let age = 24;

// let person = {
//   name,
//   age,
// };
// console.log(person);

//javascript data structure

// let people = [
//   { name: "nway", age: 24, gender: "male" },
//   { name: "wai", age: 14, gender: "female" },
//   { name: "nwaywai", age: 25, gender: "male" },
// ];
// let names = people.map((person) => {
//   return person.name;
// });
// console.log(names);

// let filterdArray = people.filter((person) => {
//   return person.gender === "male";
// });
// console.log(filterdArray);

// let searchKeyword = prompt("search people :");

// let filterdArray = people.filter((person) => {
//   return person.age < 18;
// });
// console.log(filterdArray);

// let filterdArray1 = people.filter((person) => {
//   return person.name.includes(searchKeyword);
// });
// console.log(filterdArray1);

//JSON ''
//string ,number,Boolean,,Array,Object,null

// let person = '{"name" :"nway nway wai","age" : 20}';
// let obj = JSON.parse(person);
// console.log(obj.name);

// let person = { name: "nway nway wai", age: 20 };
// console.log(JSON.stringify(person));

//conditions (if else)

// let tired = prompt('are you tired? "yes/no" :');

// if (tired === "yes") console.log("rest well");
// else if (tired === "no") console.log("go back to work");
// else console.log("pls enter yes or no");

//if else example

// let product_price = [100, 500, 100, 300, 700, 200, 100];

// product_price = product_price.map((price) => {
//   if (price === 100) price -= 30;
//   return price;
// });
// console.log(product_price);

// let people = [
//   { name: "john", age: 25 },
//   { name: "jane", age: 20, gender: "f" },
//   { name: "jack", age: 40, gender: "m" },
// ];

// people = people.map((person) => {
//   if (person.gender === "m") person.gender = "male";
//   else if (person.gender === "f") person.gender = "female";
//   else person.gender = "unknown";
//   return person;
// });
// console.log(people);

//if else expression( ternary operator)

// let age = 20;
// let permission = age > 18 ? "authorized" : "unauthorized";

// if (age > 18) {
//   permission = "authorized";
// } else {
//   permission = "unauthorized";
// }
// console.log(permission);

//switch statement

// switch (5) {
//   case 1:
//     console.log("one");
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   default:
//     console.log("this is default");
// }

// let people = [
//   { name: "nway nway wai", age: 24, gender: "f" },
//   { name: "nway nway ", age: 23 },
//   { name: "wai", age: 18, gender: "m" },
// ];
// people = people.map((person) => {
//   switch (person.gender) {
//     case "m":
//       person.gender = "male";
//       break;
//     case "f":
//       person.gender = "female";
//       break;
//     default:
//       person.gender = "unknown";
//   }
//   return person;
// });
// console.log(people);

//whole loop

// let x = 0;
// while (x < 10) {
//   console.log("hi");
//   x++;
// }

// let people = ["mgmg", "aungaung", "kyawkyaw", "susu", "john"];
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
// console.log(people[3]);

// let x = 0;
// while (x < people.length) {
//   console.log(people[x]);
//   x++;
// }

// do while loop
// let x = 0;
// do {
//   console.log("work" + x);
//   x++;
// } while (x < 5);

// //for loop
// let people = ["mgmg", "aungaung", "kyawkyaw", "susu", "john"];
// for (let x = 0; x < people.length; x++) {
//   console.log(people[x]);
// }

// //for of loop

// let people = ["mgmg", "aungaung", "kyawkyaw", "susu", "john"];

// for (person of people) {
//   console.log(person);
// }

// //for in loop

// let person = {
//   name: "nway wai",
//   age: 24,
// };
// for (key in person) {
//   console.log(person[key]);
//   console.log(`${key} is ${person[key]}`);
// }

// for (key in people) {
//   console.log(people[key]);
// }

//scoping

// let x = 0; //global variable
// console.log(x);
// {
//   let y = 1; //local variable
//   console.log(y);
//   console.log(x);
// }

// function test() {
//   let y = 10;
//   console.log(y);
// }
// test();
