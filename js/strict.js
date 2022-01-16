'use strict'
//- нельзя использовать необъявленные переменные
// a = 3;
// console.log(a)
// a1 = 5;


// console.log(this)

//- в нестрогом режиме у функции this - window
//- в строгом режиме у функции this - undefined
function f () {
  // 'use strict'
  console.log(this)
}

f()
window.f()

// 

function F(){
  this.a = 5;
}

// - нельзя вызвать ф-ю конструктор без new
const newF = new F()

/*************************************************************/
// y = 6;
var q = 5;


// - var позволил выделять переменные в локальную область видимости (функции)
// - var не поддерживает блочной области видимости
// - var позволял использовать поднятие переменных (использование до объявления)

function f1(){
  var vInF1 = 'vInF1';
}
f1()

for(var i = 1; i<=5; i++){
  console.log(i)
}

console.log(i)

// поднятие переменных
v2 = 10;
console.log(v2);
var v2;

j = 'first value';
for(var i = 1; i<=5; i++){
  var j = 50;
}
