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

// let sum = 0; // аккумулятор

// for(let i = 1; i <= 10; ++i) {
//   sum = sum + i;
//   // console.log('i = ', i, ':  sum = ', sum)
// }

// // Рассчитать произведение (кратных 5) чисел от 1 до 10
// let maxNumber = 28;
// let foldFactor = 5;
// let mult = 1;

// for (let i = 1; i <= maxNumber; i++) {
//   if (i % foldFactor === 0) {
//     mult *= i;
//   }
// }

// console.log(sum);

// 1 while (c предусловием) - выполнится минимум 0 раз 
/*
while (условие) {
  // тело цикла
}
*/

// 2 for (c предусловием) - выполнится минимум 0 раз 

/*
for(let i = 0; i <= n; i++) {
    // тело цикла
}
*/

// 3 do .. while (c постусловием) - выполнится минимум 1 раз 

/*
do {
  // тело цикла
} while (условие)
*/

// задавать пользователю 2+2*2

// const expectedValue = 6;
// let userValue = null;

// do {
//   userValue = Number(prompt('Calculate 2+2*2'));
// } while(userValue !== expectedValue);

// alert('You are right!');

// вывести все высокостные годы (нацело делиться на 4)
// из заданого диапазона (for, do..while)
// начало и конец диапазона вводить

// let startYear = Number(prompt('Input start year'))
// let endYear = Number(prompt('Input end year'))

// for (let i = startYear; i <= endYear; i++) {
//   if (i % 4 === 0 ) {
//     console.log(i)
//   }
// }


// if(startYear > endYear){
//   const tmpStartYear = startYear;
//   startYear = endYear;
//   endYear = tmpStartYear;
// }
// let currentYear = startYear;
//   do {
//     if (currentYear % 4 === 0 ) {
//       console.log(currentYear)
//     }
//     currentYear++;
//   } while (currentYear <= endYear)

// *таблица умножения

// for(let i = 1; i<=10; i++){
//   console.group('Умножение на ' + i)
//   for (let j = 1; j<=10;j++){
//       console.log(i + '*' + j + '=' + i*j);
//   }
//   console.groupEnd()
// }
