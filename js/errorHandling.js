'use strict';

function fact(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Argument must be number type');
  }

  if (n < 0 || !Number.isSafeInteger(n)) {
    throw new Error('Argument must be non negative safe int value');
  }

  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}

// throw

try {
  console.log('TRY: BEFORE ERR');
  const f = fact(Infinity);
  console.log('TRY: AFTER ERR');
} catch (e) {
  console.log('error :>> ', e);
}

console.log('End of script ');

// написать функцию для валидации имени пользователя (4-32, string)
console.group('name validation');
function validateName(firstName) {
  if (typeof firstName !== 'string') {
    throw new TypeError('Name must be a string value');
  }
  if (firstName.length < 4 || firstName.length > 32) {
    throw new RangeError('Length of name must be 4-32 chars');
  }

  return firstName;
}

try {
  const firstName = validateName(555);
  console.log('firstName :>> ', firstName);
} catch (err) {
  if (err instanceof RangeError) {
    console.log('RangeError :>> ');
  } else if (err instanceof TypeError) {
    console.log('TypeError :>> ');
  } else if (err instanceof Error) {
    console.log('Error :>> ');
  }
}
console.groupEnd();
// Реализовать функцию, которая принимает возраст, возвращает 1)возраст, если параметр соответствует требованиям, 2)иначе генерирует ошибку

function checkAge(age) {
  if (typeof age !== 'number') {
    throw new TypeError(`inccorect data type`);
  }
  if (age <= 0 || age > 120) {
    throw new RangeError('inccorect age');
  }
  if (!Number.isInteger(age)) {
    throw new RangeError('age has to be integer number');
  }
  return age;
}
try {
  const age = checkAge(5555);
  console.log('data acceptable');
} catch (err) {
  if (err instanceof TypeError) {
    console.log('v must be number type');
  } else if (err instanceof RangeError) {
    console.log('age must be an integer between 1 and 120');
  } else if (err instanceof Error) {
    console.log('Something wunt wrong');
  }
}
