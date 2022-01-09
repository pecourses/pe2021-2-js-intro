// Условная конструкция и условные операции

/*
if (<condition>) {
  <operators_true>
} else {
  <operators_false>
}

*/

const isAccsessed = false;

if (isAccsessed) {
  console.log("You had permission) Have fun)");
} else {
  console.log("Accsess denied. Try again later.")
}

//условные операции
const age = 18;
console.log('age < 18', age < 18);
console.log('age > 18', age > 18);
console.log('age <= 18', age <= 18);
console.log('age >= 18', age >= 18);

// Нестрогое равенство (сначала приводит типы, потом сравнивает)
console.log('age == 18', age == '18'); // ПЛОХО!!!
// Строгое равенство (если типы разные, то сразу false)
console.log('age === 18', age === '18');

// Нестрогое неравенство (сначала приводит типы, потом сравнивает)
console.log('age != 18', age != '18'); // ПЛОХО!!!
// Строгое сравнение (если типы разные, то сразу false)
console.log('age !== 18', age !== '18');

// Проверить возраст пользователя: Если пользователь совершеннолетний, то выдать
// запрос на предоставление ковид сертификата
// Иначе "Wellcome" 

// const userAge = 1;
// const userAge = Number(prompt("Введите возраст"));

// if (userAge >= 18) {
//   console.log("Предъявите сертификат");
// } else {
//   console.log("Welcome!");
// }

// Сокращенная форма

// if (userAge >= 18) {
//   console.log("Предъявите сертификат");
// }

// console.log("Welcome!");

// если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
      // иначе вакцинироваться 

// const userAge = 20;
// const isVactinated = true;

// if (userAge < 18) {
//   console.log("Wellcome");
// } else {
//   if (isVactinated) {
//     console.log("Wellcome");
//   } else {
//     console.log("Go to vactination");
//   }
// }

// if (userAge < 18) {
//   console.log("Wellcome");
// } else if (isVactinated) {
//   console.log("Wellcome");
// } else {
//   console.log("Go to vactination");
// }

// Пользователь вводит 2 числа. Вам нужно определить и вывести меньшее

// const number1 = Number(prompt('Введите число 1')); 
// const number2 = Number(prompt('Введите число 2')); 
 
// if (number1 > number2){ 
//     console.log(number2); 
// } else { 
//     console.log(number1); 
// }

// если совершеннолетний и сертификат есть, то "Wellcome"
// иначе на вакцинацию 

// Логической И: &&
// const userAge = 20;
// const isVactinated = false;
//           true    && true
// if (userAge >= 18 && isVactinated) {
//   console.log("Wellcome");
// } else {
//   console.log("Go to vactination");
// }

// 18 <= age < 65   =>   age >= 18 && age <= 65
// Если человек совершеннолетний работоспособного возраста, 
// то запросить полную оплату проезда
// иначе сообщить о льготе

// const userAge = 20;

// if (userAge >= 18 && userAge <= 65) {
//   console.log("Оплатите полную стоимость");
// } else {
//   console.log("Оплатите половину стоимости");
// }

// console.log('true && true = ', true && true);
// console.log('true && false = ', true && false);
// console.log('false && true = ', false && true);
// console.log('false && false = ', false && false);

// Если ребенок или пожелой человек -  половину стоимости
// иначе - полную стоимость
// Логическое ИЛИ: ||

// if (userAge < 14 || userAge > 65) {
//   console.log("Оплатите половину стоимости");
// } else {
//   console.log("Оплатите полную стоимость");
// }

// console.group('Таблица истинности ИЛИ')
// console.log('true || true = ', true || true);
// console.log('true || false = ', true || false);
// console.log('false || true = ', false || true);
// console.log('false || false = ', false || false);
// console.groupEnd()

// Логическое отрицание !

// const isAdult = true;

// if (!isAdult) {
//   console.log("Оплатите половину стоимости");
// } else {
//   console.log("Оплатите полную стоимость");
// }

// console.log('!false = ', !false);
// console.log('!true = ', !true);

// SWITCH (множественный выбор)

// Перести 12-бальную оценку в 5-ти бальную

// const point = Number(prompt("Укажите оценку"))

// if (point === 12) { console.log('5+');}
// else if (point === 11) { console.log('5');}
// else if (point === 10) { console.log('5-');}
// else {console.log("point is less then 5-")}

// switch (point) {
//   case 12: 
//     console.log('5+'); 
//     break;
//   case 11:  
//     console.log('5'); 
//     break;
//   case 10:  
//     console.log('5-');
//     break;
//   default: 
//     console.log("point is less then 5-")
// }

// Пользователь вводит 2 числа a,b и операцию ???.(+ - * / %)
// Вывести результат a ??? b

// const var1 = Number(prompt('first number '));
// const var2 = Number(prompt('second number '));
// const operation = prompt('enter operation (+ - * / %)'); // '+', '-', ...

// switch (operation) {
//     case '+':
//         alert(var1 + var2);
//         break;
//     case '-':
//         alert(var1 - var2);
//         break;
//     case '*':
//         alert(var1 * var2);
//         break;
//     case '/':
//         alert(var1 / var2);
//         break;
//     case '%':
//         alert(var1 % var2);
//         break;

//     default:
//         alert('inccorect operation');
//         break;
// }

// Преобразовать номер месяца в название времени года

// const monthNumber = 1;

// switch (monthNumber) {
//   case 1: 
//   case 2:
//   case 12:
//     console.log('winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('summer');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('autumn');
//     break;
//   default:
//     console.log('incorrect month number');
// }

// switch (true) {
//   case monthNumber === 1 || monthNumber === 2 || monthNumber === 12:
//     console.log('winter');
//     break;
//   case monthNumber >= 3 && monthNumber <= 5:
//     console.log('spring');
//     break;
//   case monthNumber >= 6 && monthNumber <= 8:
//     console.log('summer');
//     break;
//   case monthNumber >= 9 && monthNumber <= 11:
//     console.log('autumn');
//     break;
//   default:
//     console.log('incorrect month number');
// }


// Условный (тернарный) оператор
// const number1 = Number(prompt('Введите число 1')); 
// const number2 = Number(prompt('Введите число 2')); 
 
// const minNumber = number2 < number1 ? number2 : number1;
// console.log(minNumber);

// Если совершеннолетний, то переменная access примет значение "has access"
// иначе переменная access примет значение "hasn`t access"

const access = Number(prompt('enter your age')) >= 18 ? 'Access allowed' : 'acces denied';
console.log(access);
