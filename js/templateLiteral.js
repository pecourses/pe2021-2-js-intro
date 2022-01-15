// for(let i = 1; i<=10; i++){
//   console.group(`Таблица умножения для ${i}`);
//   for (let j = 1; j<=10;j++){
//       console.log(`${i}*${j}=${i*j}`);
//   }
//   console.groupEnd();
// }

// const userName = prompt("Input name");
// alert(`Hello ${userName}!`)

// Пользователь имеет 3 попытки ввести пароль
// Если пароль верен, то вывести "Пароль верен"
// Иначе "Пароль неверен"

const TRY_LIMIT = 3;
const PASSWORD = 'qwerty';
let currentTry = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt('Input password') === PASSWORD
  // if (isPasswordCorrect) {
  //   break;
  // }
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect)

// if (isPasswordCorrect) {
//   console.log('Пароль верен')
// } else {
//   console.log('Пароль неверен')
// }

console.log(`Пароль ${isPasswordCorrect ? 'верен' : 'неверен'}`)