// 'use strict';

// const user = { name: 'Test' };
// const grut = { name: 'Grut' };

// const usersMessages = {
//   [user]: ['qwerty', 'Hello'],
// };

// // Коллекцичя по ключу, которая может в качестве ключа содержать любой тип

// Свойства/методы:
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// keys() => MapKeyIterator
// values() => MapValueIterator
// enrties() => MapEntryIterator
// forEach() =>

// const map = new Map();

// // set, get

// map.set(user, ['qwerty', 'Hello']);

// console.log(map.get(user));

// map.set(grut, ['I`m Grut', 'I`m Grut']);
// map.set(user, ['Hello']); // перезатер

// console.log(map.has(user));
// console.log(map.has(4));

// console.log('map.size :>> ', map.size);

// // map.delete(user);

// // map.clear();

// console.log('keys :>> ', map.keys());

// for (let v of map) {
//   console.log('v :>> ', v);
// }

// const map1 = new Map([
//   [user, ['Hello']],
//   [grut, ['I`m Grut', 'I`m Grut']],
// ]);

// const obj = { user1: 'Test', user2: 'Test1' };
// const map2 = new Map(Object.entries(obj));

const vocabulary = new Map();
vocabulary.set('dog', 'собака');
vocabulary.set('cat', 'кот');
vocabulary.set('run', 'бежать');

const engPhrase = 'dog run white cat'; // => перевод

const rusPhrase = translate(engPhrase);
console.log('rusPhrase :>> ', rusPhrase);

// function translate(prase) {
//   const engWords = prase.split(' ');
//   console.log('engWords :>> ', engWords);
//   const rusWords = engWords.map(w => {
//     if (vocabulary.has(w)) {
//       return vocabulary.get(w);
//     } else {
//       return w;
//     }
//   });
//   console.log('rusWords :>> ', rusWords);
//   const rusPhrase = rusWords.join(' ');
//   return rusPhrase;
// }

function translate(prase) {
  return prase
    .split(' ')
    .map(w => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(' ');
}
