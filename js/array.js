'use strict'

const arr = {
  0: {name: 'notebook1'},
  1: {name: 'notebook2'}
}

// Array

// нумерация элементов с 0!!!
const arr1 = new Array();
const arr2 = []; // синтаксич. сахар

const arr3 = [100, 200, 300];

const arr4 = [4,9,5];

const sumOfArr4 = sum(arr4);


function sum(arr) {
  let sum = 0; 

  for(let i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  }

  return sum;
}

// получить массив, содержащий элементы 2-х массивов

const a1 = [1,5,8];
const a2 = [5,7,9,8]; 
// [1,5,8,5,7,9,8] // дописать элементы в a1

const a3 = [1,5,8];
const a4 = [5,7,9,8]; 

function concat(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i]

  }
  return arr1;
}

// Добавление / удаление элементов в массив

// push - добавление в конец массива

const arr5 = [1,4,7];
arr5.push(10);
console.log(arr5)


// pop - возврат последнего + его удаление

const item1 = arr5.pop()
console.log(arr5)
const item2 = arr5.pop()
console.log(arr5)

// unshift - добавление в начало массива

arr5.unshift(1000);
//arr5.unshift(1,2,3);
console.log(arr5);

// shift - возврат нулевого элемента + его удаление

const item3 = arr5.shift();
console.log(arr5);

// push
const a5 = [1,5,8];
const a6 = [5,7,9,8]; 

function concat(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);

  }
  return arr1;
}

// Ввести с помощью prompt 7 элементов в массив

// const arr7 = [];

// for (let i = 0; i < 7; i++) {
//   arr7.push(Number(prompt("Введите число")));
// }

// console.log(arr7);

// const arr7 = [];
// function add(elmnt) {
//   for (let i = 0; i < elmnt; i++) {
//     arr7.push(Number(prompt('lorem')));
//   }
//   return arr7;
// }
// console.log(add(4));

// const arr7 = [];
// let enter;
// do{
//     enter = +prompt('enter a number');
//     const isNumber = Number.isNaN(enter)
//     if (isNumber) {break}
//     arr7.push(enter);
// }  while (enter !== undefined || enter === null)

// Методы массивов

console.log(Array.from('q\'w e,rty\\'));
                  -3 -2 -1
const a8 = [1, 2, 3, 5 , 8];
const a9 = [7,8,9,10];

const a10 = a8.concat(a9);
const a11 = a9.concat(a8);

// из a8 скопировать 2,3 (два последних элемента)
// console.log(a8.slice(1,3));
// console.log(a8.slice(1));
console.log(a8.slice(-2));

// из a9 элементы с инд 1,2

console.log(a9.splice(1,2));

// Методы перебора массивов

// // forEach выполняет коллбек последовательно для всех элементов массива

// const pets = ['parrot', 'cat', 'dog'];

// const printPet = function(item, index, arr){
//   console.log(index, item, arr)
// }

// pets.forEach(printPet);

// // filter => новый массив с элеметами, которые удовлетворяют условию в коллбеке
// const numbers = [1, 2, 3, 4, 8, 6, 5];

// const isOdd = function(item, index, arr){
//   return item % 2 === 0;
// }

// const odd = numbers.filter(isOdd);
// console.log(odd)

// //отфильтровать неотрицательные числа
// const numbers = [-1, 2, 3, -4, 0, 8, 6, 5];
// const isOdd = function(item) {
//   return item >= 0;
// }

// const odd = numbers.filter(isOdd)
// console.log(odd);

// map => новый массив с элементами, которые возвращены их коллбека для каждого элемента исходного массива
// const numbers = [-1, 2, -3, 4, 5, -6, 7];

// const plus1 = function (i) {
//   return i + 1;
// }

// const newNumbers = numbers.map(plus1);
// console.log(newNumbers);
// => [0, 3, -2, ...]

// every => true (выполняется для всех) / false 

 const numbers = [1, -2, 3, 4, 5, 6, 7];

const isPositive = function (item) {
  return item > 0 ;
}


console.log(numbers.every(isPositive))

const users = [
  {name: 'Test', age: 6},
  {name: 'Test2', age: 55},
]

function isAdult(item){
  return item.age >= 18;
}

console.log(users.every(isAdult))

// some  => true (выполняется хотя бы для одного) / false 

console.log(users.some(isAdult))
