'use strict';

// 3! = 1*2*3
// 3! = 2! *3
// 3! = 1! * 2 * 3
// 3! = 0! * 1 * 2 * 3
//      1

function facktorial(n) {
  if (n === 0) { 
    return 1;
  } 
  return n * facktorial(n - 1);
}

// return 3 * facktorial(2);
// facktorial(2): 2 * facktorial(1)
// facktorial(1): 1 * facktorial(0)
// facktorial(0): 1

// Реализовать формирование скобочной последовательности
// bracketWrapper(2) => ['(','(',')',')']
// bracketWrapper(1) => ()
// ['(','(','(',')',')',')']
// ['(','(',')',')']
// ['(',')']

// ОБЯЗЯТЕЛЬНО УСЛОВИЕ ПРЕКРАЩЕНИЯ РЕКУРСИИ

function bracketWrapperString(n) {
  const brackets = [];

  bracketWrapper(n);

  function bracketWrapper(n) {
    if (n === 0) { return; }
    brackets.push('(');
    bracketWrapper(n-1);
    brackets.push(')');
  }
  return brackets.join('')
}
