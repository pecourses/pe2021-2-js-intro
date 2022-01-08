// Переменные

// 1     - a-z A-Z _ $
// 2-... - a-z A-Z _ $ 0-9
let userName = 'Test';
userName = 'Test1';

const g = 9.8; // МАКСИМАЛЬНО ИСПОЛЬЗУЕМ const
// g = 2.8;
var a = 10; // старый стиль

// Стиль именования - camelCase
// lowerCamelCase
// UpperCamelCase

/*
  Многострочный коммент
*/
// Однострочный коммент

// Типы данных
// (Примитивы 7 + object)

// String 

const stringValue1 = 'Test';
const stringValue2 = "Test";
const stringValue3 = `Test`;

const typeOfStringValue1 = typeof stringValue1;

// alert(stringValue1)
console.log(typeOfStringValue1);

// Number (0, 10, 5.5, -55, 5.2e7, -0, +0(0), +Infinity, -Infinity, NaN)
const numberValue1 = 0;
const numberValue2 = 5.5;
const numberValue3 = -Infinity;
const numberValue4 = NaN;

console.log(typeof numberValue1);
console.log(typeof numberValue2);
console.log(typeof numberValue3);
console.log(typeof numberValue4);

// BigInt
const bigintValue = 9007199254740991123165456745645n;
console.log(typeof bigintValue);

// Boolean
const booleanValue1 = true;
const booleanValue2 = false;

console.log(typeof booleanValue1)

// Symbol
const symbolValue = Symbol();
console.log(symbolValue);

// value undefined (type undefined)
let anonymusValue; // = undefined

console.log(anonymusValue);
console.log(typeof anonymusValue);

// value null (type null (official object))
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);

// ВВод/вывод

// const userName1 = prompt("Input name:");
// alert(typeof userName1)

// console.log('Hello, world!');

// alert('Hello, world!');
// alert('Hello, world!');
// alert('Hello, world!');

// Операции
// Неявное приведение типов (разные типы операндов в одной операции)
// Явное приведение типов (Number(125n), String(Symbol()))

// Если хоть один операнд в + --строка, то операнды неявно приводятся к String и результат -- String
// Иначе операнды приводятся к Number (Если оба не BigInt)
console.log('1 + 1 =', 1 + 1);
console.log('1 + "555" =', 1 + '555');
console.log('1 + true =', 1 + true);
console.log('1 + null =', 1 + null);
console.log('1 + undefined =', 1 + undefined);
// console.log('1 + Symbol() =', 1 + String(Symbol()));
console.log('1 + 125n =', 1 + Number(125n));

console.log('"string" + 1 = ', 'string' + 1)
console.log('"string" + true =', "string" + true);
console.log('"string" + null =', "string" + null);
console.log('"string" + undefined =', "string" + undefined);
// console.log('"string" + Symbol() =', "string" + Symbol());
console.log('"string" + 125n =', "string" + 125n);

// Приводятся в false: false, null, undefined, 0, NaN, ''

// Список операций
console.log('10 - 1 = ', 10 - 1)
console.log('10 * 1 = ', 10 * 1)
console.log('10 / 2 = ', 10 / 2)
console.log('11 % 2 = ', 11 % 2) // остаток от деления

//Инкремент (префиксный)
let i = 1;
console.log('++i = ', ++i)
console.log('i = ', i)
//Инкремент (постфиксный)
i = 1;
console.log('i++ = ', i++)
console.log('i = ', i)

//Декремент (префиксный)
i = 1;
console.log('--i = ', --i)
console.log('i = ', i)
//Декремент (постфиксный)
i = 1;
console.log('i-- = ', i--)
console.log('i = ', i)

//Краткие записи для операций
let j = 1;
j += 2;  //j + 2
j *= 10; //j * 10
let k = 1;
k -= 5; //k-5
console.log('k -= 5:', k)
k /= 2;
console.log('k /= 2:', k)
//Приоритет операций
let l = 5;
console.log(' ++l / 3  = ', ++l / 3 );

// Задание (ввести 2 числа и вывести их сумму)

// const number1 = Number(prompt("Input number1"));
// const number2 = +prompt("Input number2");

// alert(number1 + number2);
