//1. Use strict
'use strict';

//2. Variable;
// 자바 변수 let (added in ES6)
// block scope

let globalName = 'global name';
{
    let name = 'tlsgn';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// console.log(name);
console.log(globalName);

// var 는 사용 X
// var는 선언하기전에 사용할 수 있음 -> hoisting
// hoisting : 어디에 선언 했는지에 상관 없이 
//            항상 젤 위로 선언을 끌어 올려 주는 것
// var는 block scope가 없음 block을 철저히 무시함 => 위험 부담이 높음
console.log(age);
age = 4;
console.log(age);
var age;

// Constants
// 값을 선언한 포인터가 잠겨 있음 따라서 값을 변경 할 수 없음
// immutable data type
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// primitive, single item: number, string, boolean, null ...
// object, box container
// function, first-class function
const count = 17;
const size = 17.1;
console.log(`value ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

console.log('==========================');
// number - special numeric values: infinity, -infinity, NaN(Not A Number)
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 11111111111111111111111111111111111111n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// Object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
ellie.age = 21;

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);