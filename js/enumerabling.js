'use strict';

const user = {
  firstName: 'Test',
  age: 24,
};

// // for..in
// // - перебирает перебираемые (enumerable) свойства
// // - перебирает свойства объекта и из цепочки прототипов

// for (let key in user) {
//   console.log('key :>> ', key);
//   console.log('value :>> ', user[key]);
// }

// // задать объект car/phone и перебрать его свойства
// const phone = {
//   brand: 'Xiaomi',
//   model: 'Redmi 10',
//   color: 'grey',
//   price: 6000,
// };

// for (let key in phone) {
//   console.log(`${key}: ${phone[key]}`);
// }

const a = [1, 2, 3, 4, 5, 6];

// for (let key in a) {
//   console.log('key :>> ', key);
// }

// console.log('desctiptors :>> ', Object.getOwnPropertyDescriptors(user));
// console.log('desctiptors :>> ', Object.getOwnPropertyDescriptors(a));

// Object.keys() - => массив своих свойств (перебираемых)

console.log('Object.keys() :>> ', Object.keys(user));

// Object.values() - => массив значений своих свойств

console.log('Object.values() :>> ', Object.values(user));

// Object.entries() - => массив значений своих свойств

console.log('Object.entries() :>> ', Object.entries(user));

// for (let key in Object.keys()) {
//   console.log('key :>> ', key);
//   console.log('value :>> ', user[key]);
// }
Object.keys(a);
