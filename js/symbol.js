'use strict';

const s = Symbol();

const s1 = Symbol('key');
const s2 = Symbol('key');

const o = {
  [s]: 'qwerty',
  user: 'Test',
};

const THEME = {
  LIGHT: Symbol(),
  DARK: Symbol(),
};

const theme = THEME.DARK;
changeTheme(theme);

function changeTheme(newTheme) {
  console.log('newTheme :>> ', newTheme);
  switch (newTheme) {
    case THEME.LIGHT:
      // console.log('light :>> ');
      break;
    case THEME.DARK:
      // console.log('dark :>> ');
      break;
  }
}
/**************************************** */
// iterable

// 1 for..of - перебирает значения (Symbol(Symbol.iterator)) - iterable

// const arr = [1, 8, 3, 9, 5, 6];

// for (let value of arr) {
//   console.log('value :>> ', value);
// }

// const o1 = { name: 'Test' };
// // for (let value of o1) {
// //   console.log('value :>> ', value);
// // }

// for (let v of Object.values(o1)) {
//   console.log('value :>> ', v);
// }

// 2 деструктуризация массивов (итерируемые объекты)

// 3 spread-operator (применяется объектов и для итерируемых коллекций)
// - создание копии объекта или итерируемой коллекции
// - собирание нового объекта из нескольких других

const arr = [1, 8, 3, 9, 5, 6];
console.log('...arr :>> ', ...arr);
const q = [...arr];

const arr1 = [1, 9, 7, 8];
const q1 = [...arr, ...arr1];

const user = { name: 'Test', age: 25 };
const user1 = { ...user };

const options = {
  url: 'newURL',
};
const defaultOptions = {
  url: 'defURL',
  port: 6000,
};

const newOpt = { ...defaultOptions, ...options };
// newOpt.url = 'defURL';
// newOpt.port = 6000;
// newOpt.url = 'newURL';

// Array.from() создавать масстив из
// итерируемого объекта или псевдомассива (пронумерованы + длина)
