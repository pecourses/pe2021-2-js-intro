'use strict';

// Коллекция унакальных значений

// size
// add()
// has()
// delete()

// values()
// entries()

// clear()
// forEach()

// const s = new Set();

// s.add(10);
// s.add(10); // Не добавится, поскольку содержит только уникальные значения
// s.add(4);
// s.add(5);
// s.add(60);
// s.add(88);
// console.log('s.size :>> ', s.size);

// s.delete(10);

// console.log('s.has(4) :>> ', s.has(4));

// // Получить массив
// console.log('[...s.values()] :>> ', [...s.values()]);
// // Получить мапу
// console.log('s.entries() :>> ', s.entries());
// // new Map(s.entries())

// // s.clear();

// s.forEach((item, key, set) => {
//   console.log('item :>> ', item);
//   console.log('key :>> ', key);
//   console.log('set :>> ', set);
// });

// // Получить массив уникальных значений
// const arr = [1, 2, 6, 5, 8, 9, 6, 4, 88, 6, 9, 6, 5, 2, 2, 2, 2];
// // [1,2,6,5,8,9,4,88]

// const arrOfUniqueValues = Array.from(new Set(arr));
// const arrOfUniqueValues2 = [...new Set(arr)];

// const users1 = [
//   'Test',
//   'Grut',
//   'John Doe',
//   'Grut',
//   'John Doe',
//   'Grut',
//   'John Doe',
// ];
// const users2 = [
//   'Test',
//   'Jane Doe',
//   'Test',
//   'Jane Doe',
//   'Test',
//   'Jane Doe',
//   'Grut',
// ];

// // => один массив с неповторяющимися юзерами
// // => ['Test', 'Grut', 'John Doe', 'Jane Doe']

// const users1Unique = [...new Set(users1)];
// const users2Unique = [...new Set(users2)];
// const allUniqueUser = new Set([...users1Unique, ...users2Unique]);

// const uniqueUsers = new Set([...users1, ...users2]);
// console.log(uniqueUsers);

// Получить массив марок телефонов
const users = [
  { name: 'Test0', brand: 'IPhone' },
  { name: 'Test1', brand: 'Samsung' },
  { name: 'Test2', brand: 'IPhone' },
  { name: 'Test3', brand: 'Xiaomi' },
  { name: 'Test4', brand: 'Samsung' },
  { name: 'Test5', brand: 'Xiaomi' },
  { name: 'Test6', brand: 'IPhone' },
];

// => ['IPhone', 'Samsung', 'Xiaomi']
// for..of, push()

// const brands = [];

// for (let value of users) {
//   brands.push(value.brand);
// }
// const uniqueBrands = [...new Set(brands)];

// const brands = [];
// const brandsSet = new Set();

// for (let value of users) {
//   brandsSet.add(value.brand);
// }

// console.log('brandsSet :>> ', brandsSet);
// const uniqueBrands = [...brandsSet];
