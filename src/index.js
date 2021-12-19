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

// const sayHello = (name = "taro") => console.log(`Hello ${name}`);
// //引数が設定されないことを防止したい
// sayHello();
// sayHello("Mime");

/**
 * スプレッド構文
 */

//配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
//順番に出力する

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5]
// const [num1,num2,...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

//配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// //配列の結合
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
//これでも問題なくコピーできるが
//arr4を参照しているので
//arr8を編集した場合arr4も影響を受けてしまう

/**
 * マップやフィルターを使用した配列の処理
 */

const nameArr = ["tomy", "May", "Jun"];

// for(let index = 0; index < nameArr.length;index++){

//  console.log(nameArr[index]);

// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })

// // console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArry = [1,2,3,4,5];
// const newNumArr = numArry.filter((num) => {
//  return num % 2 === 1;
// });

// console.log(newNumArr);

//何番目かの付帯情報
// for(let index = 0; index < nameArr.length;index++){

//  console.log(`${index+1}番目は${nameArr[index]}です`);

// }

// nameArr.map((name,index) => console.log(`${index +1}番目は${name}です`));

//配列の値に条件付きで置換
const newNameArry = nameArr.map((name) => {
  if (name === "Jun") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArry);
