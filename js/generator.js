'use strict'

// Контроль над работой функции
// Асинхронность

function * f () {
  //1
  /*2*/ const a = yield 1 //1
  // 2
  console.log('a', a)
  /*3*/ const b = yield 2 //2
  //3
  console.log('b', b)
  return 5
}

// i-й вызов ф-г вернет значение, которое справа от i-го yield

// i+1-й вызов ф-г принимает параметр, который приходит в переменную слева от i-го yield

const gen = f()

console.log('gen.next()', gen.next())
console.log('gen.next()', gen.next(15))
console.log('gen.next()', gen.next(20))
