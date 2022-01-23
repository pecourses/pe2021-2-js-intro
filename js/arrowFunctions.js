'use strict'

// function f() {
//   console.log('arguments :>> ', arguments);
// }

// f(1,2,3,4);

// // sum(1, 2) => 3
// // sum(1, 2, 10) => 13

// function sum(){
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++){
//       sum += arguments[i];
//   }
//   return sum;
// }
// console.log('object :>> ', sum(1,2,3,4,5));
// console.log('object :>> ', sum(1,2,3,4,5,8,9));

// *calculate('+', 1,2,3,4,5,10)
// *calculate('*', 1,2,3,5,9,6,5,4,8)

// function sumOrMultiplicity(opetarion) {
//   let result;
//   if (opetarion === '+') {
//       result = 0;
//       for(let i = 1; i < arguments.length;i++){
//           result += arguments[i];
//       }
//   } else if(opetarion === '*'){
//       result = 1;
//       for(let i = 1; i < arguments.length;i++){
//           result *= arguments[i];
//       }
//   }
//   return result;
// }

// console.log('sumOrMultiplicity(`*`,1,2,3,4) :>> ', sumOrMultiplicity('*',1,2,3,4));

/** Стрелочные функции */

// function sum(a,b) {
//   return a + b;
// }

// const sum = (a, b) => { return a + b}

// Если нужно телько вернуть значение, то:
// const sum1 = (a, b) =>  a + b;
// console.log('sum1(5,9) :>> ', sum1(5,9));

// // Если один параметр, то скобки опускаем
// const square = n => n * n;
// console.log('square(5) :>> ', square(5));

// // isAdult (=> true, if age >= 18, else false)
// // const isAdult = (age) => {return age >= 18;}
// const isAdult = age => age >= 18;
// console.log('isAdult :>> ', isAdult(17));
// console.log('isAdult :>> ', isAdult(20));

// Проверка на четность
// const isEven = number => number % 2 === 0;
// console.log(`isEven:>> `, isEven(3));
// console.log(`isEven:>> `, isEven(4));

// Функция greeting(lang, userName), которая должна возвращать
// 'Hello ' + userName, if lang==='en'
// 'Привет ' + userName, if lang==='ru'
// 'Вiтаю ' + userName, if lang==='ua'

// const greetingOptions = {
//   en: 'Hello',
//   ru: 'Привет',
//   ua: 'Вiтаю',
// }

// const greeting = (lang, userName) =>`${greetingOptions[lang]} ${userName}`;

// console.log('greeting :>> ', greeting('en', 'Andrey'));
// console.log('greeting :>> ', greeting('ua', 'Andrey'));
// console.log('greeting :>> ', greeting('ru', 'Andrey'));

// Если возвращается объект без return, то его нужно взять в ()
const putIntoObject  = (userName, age) => ({userName: userName, age: age});
console.log('putIntoObject("Test", 22) :>> ', putIntoObject("Test", 22));

// Стрелочная ф-я не имеет своих arguments
// Стрелочная функция не имеет своего контекста (берет из окружения)
const user1 = {
  firstName: 'Test',
  lastName: 'Testovich',
  getFullName: ()=>{
    console.log('this :>> ', this);
    return `${this.firstName} ${this.lastName}`
  }
}

console.log('user1.getFullName() :>> ', user1.getFullName());