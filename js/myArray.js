'use strict';

function MyArray(){
  this.length = 0;
  // console.log(arguments);
  for(let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  this.length = arguments.length;
}

const myArrayProto = new MyArray();

// добавить значение
// увеличить длину
// вернуть новую длину

myArrayProto.push = function(item) {
  this[this.length++] = item;
  return this.length;
} 

// убираем свойство
// уменьшить длину
// вернуть значение последнего элемента
myArrayProto.pop = function () {
  if (this.length === 0) {return ;}
  const deletedElem = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return deletedElem;
}

myArrayProto.forEach = function(callback){
  for (let i = 0; i < this.length; i++) {
   callback(this[i], i, this) 
  }
}

MyArray.prototype = myArrayProto;
/***********************************************/

const arr2 = new MyArray(1,2,3,4,5) 

/****************************** */










// const arr1 = new MyArray();

// arr1.push(10);
// arr1.push(20); // [10, 20]

// function printSquare(item, index, arr){
//   console.log(item ** 2);
// }

// arr1.forEach(printSquare);

/****************************** */
// const myArr1 = new MyArray();
// console.log(myArr1);

// myArr1.push(1);
// console.log(myArr1);
// myArr1.push(2);
// console.log(myArr1);

// console.log(myArr1.pop())
// console.log(myArr1);

// console.log(myArr1.pop())
// console.log(myArr1);

// console.log(myArr1.pop())
// console.log(myArr1);

// console.log(myArr1.pop())
// console.log(myArr1);