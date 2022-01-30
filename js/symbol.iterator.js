'use strict';

// Реализация протокола итерируемости

/**
 * Iterator
 */
// Протокол "Итератор" определяет стандартный способ получения последовательности значений (конечной или бесконечной).
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols

class Range {
    constructor(from, to) {
      this._from = from;
      this._to = to;
    }
    // Метод Symbol.iterator() должен возвращать объект с методом next(), который возвращает объект с двумя свойствами {value: (текущее значение), done: (закончен ли обход)}
    [Symbol.iterator]() {
      // Замыкание  
      let currentValue = this._from;
      return {
        // Стрелка, чтобы брать контекст из лексического окружения места объявления, а не места вызова  
        next: () => {
          if (currentValue > this._to) {
            return {
              value: undefined,
              done: true,
            };
          }
          return {
            value: currentValue++,
            done: false,
          };
        },
      };
    }
}
  
const range1 = new Range(3, 5);

// Можно перебирать циклом for..of
for (const item of range1) {
  console.log('item :>> ', item);
}

// Можно создавать массив на основе итерируемого объекта
const arr008 = Array.from(range1);
// new Range(1, 5) => [1, 2, 3, 4, 5]
// new Range(10, 13) => [10, 11, 12, 13]