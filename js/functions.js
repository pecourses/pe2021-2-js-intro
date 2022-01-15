// ФУНКЦИИ

// Повторное использование кода

/* function declaration - можно объявлять в любом месте
function имяФункции(параметры) {
  // тело
}
*/

// Передача значения в ф-ю

//console.log('Hello ' + 'Test')
helloTo('Test');

//console.log('Hello ' + 'Ivan')
helloTo('Ivan')

// console.log('Hello ' + 9)
helloTo(9);

function helloTo(userName) {
  console.log(`Hello ${userName}!`)
}

// Возврат значения из ф-и

//Ф-я для подсчета суммы

const sumAB = sum(1, 2)

sum(4, 5)

/**
 * Function for calculate sum of two numbers
 * @param {number} a - first summand
 * @param {number} b - second summand
 * @returns {number} sum of a, b
 */

function sum(a, b){
  // const sumOfAB = a + b;
  return a + b;
}

// написать функцию, которая возводит указанное число (параметр) в степень 4 
// a*a*a*a
// a**4

const xDeg4 = deg4(3);
console.log(xDeg4)

// JSDoc for deg4

/**
 * Function exponentiate number to degree 4
 * @param {number} x - number, exponentiated to degree 4
 * @returns {number} x in degree 4
 */

function deg4(x) {
  // const x4 = x**4;
  return x**4;
}

// Написать ф-ю для расчета суммы чисел от 1 до n

function sum1ToMaxValue (maxValue) {
  let sum = 0;
  for(let i = 1 ; i <= maxValue; i++){
    sum += i;
  }
  return sum;
}

// 1; 5
// let sum = 0;
// for(let i = 1 ; i <= 5; i++){
//   sum += i;
// }
const sum1To5 = sum1ToMaxValue(5);
console.log(sum1To5)

// 1; 10
// let sum = 0;
// for(let i = 1 ; i <= 10; i++){
//   sum += i;
// }

const sum1To10 = sum1ToMaxValue(10)
console.log(sum1To10)

// Написать ф-ю, которая возвращает true или false
// в зависимости от переданного количества лет

const age = 10;
console.log(checkAge(age));


function checkAge(age) {

  return age > 17; 
}

// Чистая ф-я -- 
// 1) детерминированная ф-я - ф-я, которая при одних и
// тех же значениях параметров возвращает один и тот же результат
// 2) без побочных эффектов

// Параметры по умолчанию
// Если значение на место параметра по умолч-ю не передано,
// то берется значение, указанное после = в списке параметров

const xy = xDegY(4,3);
const x2 = xDegY(5);

function xDegY(x, y = 2){
  // if (y === undefined) {y = 2}
  return x**y;
}

// Написать ф-ю, которая возвращает произведение чисел от n1(=1)  до n2

function productNumbers(n2, n1 = 1) {
  let mul = 1;
  for (n1; n1 <= n2; n1++) {
    mul *= n1;
  }
  return mul;
}
console.log(productNumbers(5, 2));
console.log(productNumbers(3));

/******************************************* */
/* function expression
const func = function (список параметров){
  // тело функции
}
*/
const add = function (a, b) {
  return a + b;
}

console.log(add(1,10));

// function expression
const degXY = function (x, y){
  return x**y;
}

console.log(degXY(2,6));
