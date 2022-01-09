// 
// console.log("Пройди прямо");
// console.log("Поверни направо");
// console.log("Пройди прямо");
// console.log("Поверни направо");
// console.log("Пройди прямо");
// console.log("Поверни направо");
// console.log("Пройди прямо");
// console.log("Поверни направо");

// Циклы

/*
while (<condition>) {
  // operators -- тело цикла
}
*/  

// итерация -- одно повторение тела цикла

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep <= stepsCount) {
//   console.log("Пройди прямо");
//   console.log("Поверни направо");
//   currentStep++;
//   // console.log('currentStep:', currentStep)
// }

// console.log('Квадрат описан')

// const stepsCount = 4;
// let currentStep = 1;

// while (currentStep++ <= stepsCount) {
//   console.log("Пройди прямо");
//   console.log("Поверни направо");
// }

// У пользователя есть книга с pageCount страниц
// 1) Вывести номера страниц с 1й по последнюю
// 2) Вывести четные номера страниц по последнюю

// let currentPage = 1;
// const pagesCount = 5;

// while(currentPage <= pagesCount){
//     console.log(currentPage);
//     currentPage++;
// }

// let currentPage = 1;
// const pagesCount = 6;

// while(currentPage <= pagesCount){
//     if(currentPage % 2 === 0){
//         console.log(currentPage);
//     }
//     currentPage++;
// }

// let currentPage = 2;
// const pagesCount = 6;

// while(currentPage <= pagesCount){
//   console.log(currentPage);
//   currentPage += 2;
// }

// Цикл со счетчиком

// let currentPage = 1;
// const pagesCount = 5;

// while(currentPage <= pagesCount){
//     console.log(currentPage);
//     currentPage++;
// }


// const pagesCount = 5;

// i - переменная цикла (счетчик)
// 1 выполняется 1 раз до цикла
// 2 - условие продолжения цикла
// 3 - изменение переменной цикла, выполняется по 1 разу после каждой итерации

//       1          2            3      
// for(let i = 1; i <= pagesCount; ++i) {
//   console.log(i);
// }

// вывести номера стр с посл. по 1

// const pagesCount = 5;

// for (let i = pagesCount; i > 0; --i) {
//   console.log(i);
// }

// Рассчитать сумму чисел от 1 до 10

let sum = 0; // аккумулятор

for(let i = 1; i <= 10; ++i) {
  sum = sum + i;
  // console.log('i = ', i, ':  sum = ', sum)
}

// Рассчитать произведение (кратных 5) чисел от 1 до 10
let maxNumber = 28;
let foldFactor = 5;
let mult = 1;

for (let i = 1; i <= maxNumber; i++) {
  if (i % foldFactor === 0) {
    mult *= i;
  }
}

console.log(sum);
