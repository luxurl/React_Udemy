/**
 * comst,letなどの変数宣言
 */

// var val1 = "var1";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var2";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "re var1";
// console.log(val1);

// //変数の上書きや、意図しない再宣言が行われてしまう
// let val2 = "let";
// console.log(val2);

// //letは上書きが可能
// val2 = "let2";
// console.log(val2);

//letは再宣言不可能
// let val2 = "re let"

//constは上書きも再宣言も不可
// const val3 = "const";
// console.log(val3);

// val3 = "const2";

// const val3 = "re const";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"name",
//   age:"28"
// };

// console.log(val4);

// val4.name = "taro"
// val4.adress = "NewYork"
//constで定義した配列もプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0]= "bird";
// val5.push("monky");
// console.log(val5);
//Reactの変数宣言はconst

/**
 *
 * テンプレート文字列
 * */

// const name = "tony";
// const age = 28;

// //I am tony My age is 28

// //従来の方法
// const massage1 = "My name is " + name + "My age is " + age;
// console.log(massage1);

// //テンプレート文字列を使う
// const massage2 = `My name is ${name} , My age is ${age}`;
// console.log(massage2);

/**
 * arrow関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1"));

//arrow関数
// const func2 = (str) =>{
//   return str;
// }

//注意点　引数が一つの時は()を省略可能
//単一式の場合returnが省略可能
// const func2 = (str) => str;

// console.log(func2("func2"));

// const func3 = (num1,num2) => {
//   return num1+num2;
// }

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 200));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "taro",
//   age: 28
// };

// const message1 = `My name is ${myProfile.name}, My age is ${myProfile.age}`;
// console.log(message1);

//変数名が長かったり量が多かった場合に変更が大変
// const {name,age} = myProfile
// const massage2 = `My name is ${name},My age is ${age}`;
// console.log(massage2);

const myprofile = ["taro", 28];

// const message3 = `my name is ${myprofile[0]},my age is ${myprofile[1]}`;
// console.log(message3);

const [name, age] = myprofile;
const message4 = `My name is ${name},My age is ${age}`;
console.log(message4);

/**
 * デフォルト値、引数など
 * */
// const sayHello = (name) => console.log(`Hello ${name}`);
// //引数が設定されないことを防止したい
// sayHello();

const sayHello = (name = "taro") => console.log(`Hello ${name}`);
//引数が設定されないことを防止したい
sayHello();
sayHello("Mime");

/**
 * スプレッド構文
 */

//配列の展開
