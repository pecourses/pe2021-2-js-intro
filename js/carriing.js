'use strict'

// sum(a,b) = > sum(a)(b)

function sum (a) {
  return function (b) {
    return a + b
  }
}

console.log('sum(4)(5)', sum(4)(5))
