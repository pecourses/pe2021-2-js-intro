'use strict';

const a = 'global';

function f1() {
  const a = 'a in f1';
  f2();
}

f1();

function f2() {
  console.log('a :>> ', a);
}

// Лексическое окружение - концепция, согласно которой окружение ф-и формируется
// согласно месту ее объявления в коде

/***** ЗАМЫКАНИЕ ************ */
/* 
Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена (согласно понятию лексического окружения окружение функции формируется по месту ее объявления).

В Closure в Scope - локальные переменные функции, внутри которой выполняемая функция была создана.
*/

function counter() {
  let i = 0;

  return function () {
    return i++;
  };
}

const counter1 = counter();
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());

const counter2 = counter();
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());

console.log('counter1() :>> ', counter1());
