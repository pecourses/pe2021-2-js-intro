'use strict';
// flags: g (поиск всех входждений), i (нечувствительность к регистру)
const regExp1 = new RegExp('qwerty', 'g');
const regExp2 = /qwerty/g;

console.log('test :>> ', regExp1.test('dfgfdg'));
console.log('match :>> ', 'qwerty qwerty'.match(regExp1));

// . - любой символ
// Квантификаторы
// {1,10}
// + - {1,}
// * - {0,}
// ? - {0,1}

// Границы
// ^   $
// \b - граница слова
// \B - не граница слова

// \d [0-9]
// [a-z]
// [A-Z]
// \w - [0-9a-zA-Z_]
// \s - пробельные символы
// \D - [^0-9] - отрицание
// \S - не пробельный
// \W - не символ слова

// | - или

console.log('object :>> ', 'qwerty'.match(/q...ty/));
console.log('email :>> ', 'qwerty@test'.match(/.{1,60}@.{1,60}/));
console.log('email :>> ', 'qwerty@test'.match(/.+@.+/));
// pet, pets
console.log('pet :>> ', 'et'.match(/pets?/));
// 1-5
console.log('0-9 :>> ', '86'.match(/[0-9][0-9]/g));
// 10 - 9999
// '9'-     '1000'+    '10000'-
console.log('10-9999 :>> ', '99999'.match(/^[0-9]{2,4}$/));
console.log('10-9999 :>> ', '9'.match(/^\d{2,4}$/));

// Имя, начинается с большой буквы, дальше 1-36 малениких
console.log('name :>> ', 'Ira'.match(/^[A-Z][a-z]{1,36}$/));
// Имя: Maria-Antuanetta
console.log(
  'name :>> ',
  'Maria-Antuanetta'.match(/^[A-Z][a-z]{1,36}(-[A-Z][a-z]{1,36})?$/)
);

// '999-999-999'+
// '999-999-99' -
// '999 999-999'-
console.log('999-999-998'.match(/^\d{3}(-\d{3}){2}$/));

// +38099-999-99-99 (66,67,68,73,96,97,98,99)
console.log(
  '+38096-999-99-99'.match(/^\+380(66|67|68|73|96|97|98|99)-\d{3}(-\d{2}){2}$/)
);
// [123] = (1|2|3)

const str = 'I malked 16_hours 666 1';
console.log('16 :>> ', str.match(/\b\w+\b/g));

// выделить из текста числа 124556.54645567
// 'fgghgh 1211 oidsjflds 45.2566'
console.log(
  'fgghgh 1211 oidsjflds 45.2566 :>> ',
  'fgghgh 1211 oidsjflds 4.2566 0564654'.match(/\b[1-9]\d*(\.\d+)?/g)
);

// ? после квантификатора переводить его из жадного в ленивый
// /".+?"/
// ' I bought apple by 10$'

// (?=) Опережающая позитивная проверка
console.log('I bought 5 apples by 10$'.match(/\d+(?=\$)/g));

// (?!) Опережающая негативная проверка
console.log('I bought 5 apples by 10$'.match(/\d+\b(?!\$)/g));

// (?<=) Ретроспективная позитивная проверка
console.log('I bought 5 apples by $10'.match(/(?<=\$)\d+/g));

// (?<!) Ретроспективная негативная проверка
console.log('I bought 5 apples by $10'.match(/(?<!\$)\b\d+/g));

// Gr8%gdfgdf
console.log(
  'Hr8^gdfgdf'.match(
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*)(?=.*[!@#$%^&*].*).{8,16}$/
  )
);

// Методы регулярок для строк:
// -------- str.replace(regExp, newSubStr);
// Заменить последовательности пробельных символов на  пробел
const str1 = 'I     am          Grut !!!';
const newStr = str1.replace(/\s{2,}/g, ' ');

//Убрать ненормативную лексику из сообщений (fuck, ass, XXX, xxx)
const str2 = 'I love XXX, fuck flower! Fuck qwerty!';
const filteredMes = str2.replace(/(fuck|ass|xxx)/gi, '@#$%^');
console.log('filteredMes :>> ', filteredMes);

// --------- str.split(regExp);
const str3 = 'Qwerty     uiop    []';
const str4 = str3.split(' ');
console.log('str4 :>> ', str4);
const str5 = str3.split(/\s+/g);
console.log('str5 :>> ', str5);

// Получить массив [год, месяц, день]
// '1999-01-01' => ['1999', '01', '01']
// '1999/01/01' => ['1999', '01', '01']
// '1999.01.01' => ['1999', '01', '01']
const date = '1990/01/01';

console.log(date.split(/\.|-|\//g));
console.log('1999-01-01'.split(/[\/.-]/g));
console.log('1999.01.01'.split(/[.]|[-]|[\/]/g));
